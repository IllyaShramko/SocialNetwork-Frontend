import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAlbumT } from "@modules/settings/models/types";
import { createAlbumValidator } from "@modules/settings/models/validators";
import {
	useAlbumUpdateMutation,
	useTagsQuery,
} from "@modules/settings/api";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./modal.styles";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Icons } from "@shared/ui/icons";
import { ModalUpdateAlbumProps } from "./modal.types";
import { useEffect } from "react";

export function ModalUpdateAlbum(props: ModalUpdateAlbumProps) {
	const { visible, onClose, album } = props;
	const { data, isLoading: isLoadingTags } = useTagsQuery();
	const [albumUpdate, { isLoading }] = useAlbumUpdateMutation();
	const { handleSubmit, control, reset } = useForm<CreateAlbumT>({
		resolver: yupResolver(createAlbumValidator),
		mode: "onChange",
		defaultValues: {
			name: album.name,
			topicId: album.topicId,
			year: album.year,
		},
	});
	useEffect(() => {
		if (visible) {
			reset({
				name: album.name,
				topicId: album.topicId,
				year: album.year,
			});
		}
	}, [album, visible, reset]);
	function clearInputs() {
		reset();
	}
	async function onSubmit(data: CreateAlbumT) {
		try {
			const response = await albumUpdate({
				id: album.id,
				...data,
			}).unwrap();
		} catch (error) {}
	}

	return (
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			onRequestClose={() => {
				onClose();
				clearInputs();
			}}
			statusBarTranslucent
		>
			<View style={styles.overlay}>
				<KeyboardAwareScrollView
					contentContainerStyle={styles.scrollContainer}
					keyboardShouldPersistTaps="handled"
				>
					<View style={styles.modalCard}>
						<View style={styles.header}>
							<TouchableOpacity
								onPress={() => {
									onClose();
									clearInputs();
								}}
							>
								<Icons.CloseIcon />
							</TouchableOpacity>
							<Text style={styles.headerText}>
								Редагувати альбом
							</Text>
						</View>
						<View style={styles.body}>
							<Controller
								name="name"
								control={control}
								render={({ field, fieldState }) => {
									return (
										<Input
											placeholder="Введіть назву"
											inputMode="text"
											autoCapitalize="none"
											autoComplete="off"
											autoCorrect={false}
											onChangeText={field.onChange}
											value={field.value}
											label="Назва альбому"
											error={fieldState.error?.message}
											accessable={true}
										/>
									);
								}}
							/>
							<Controller
								name="topicId"
								control={control}
								rules={{ required: true }}
								render={({
									field: { onChange, value, onBlur },
								}) => {
									const options = Array.isArray(data)
										? data.map((tag) => ({
												value: tag.id,
												label: tag.name,
											}))
										: [];
									return (
										<View style={styles.selectView}>
											<Text style={styles.selectedText}>
												Оберіть тему
											</Text>
											<Dropdown
												style={[styles.dropdown]}
												placeholderStyle={
													styles.placeholder
												}
												selectedTextStyle={
													styles.selectedText
												}
												inputSearchStyle={
													styles.inputSearch
												}
												containerStyle={{
													marginTop:
														Platform.OS ===
														"android"
															? -30
															: 0,
												}}
												data={options}
												dropdownPosition="bottom"
												search
												maxHeight={300}
												labelField="label"
												valueField="value"
												placeholder="Оберіть тему"
												searchPlaceholder="Пошук..."
												value={value}
												onBlur={() => {
													onBlur();
												}}
												onChange={(item) => {
													onChange(item.value);
												}}
											/>
										</View>
									);
								}}
							/>
							<Controller
								name="year"
								control={control}
								render={({ field: { onChange, value } }) => {
									const currentYear =
										new Date().getFullYear();
									const years = Array.from(
										{ length: 51 },
										(_, i) => {
											const year = currentYear - i;
											return {
												label: year.toString(),
												value: year.toString(),
											};
										},
									);

									return (
										<View style={styles.selectView}>
											<Text style={styles.selectedText}>
												Рік альбому
											</Text>
											<Dropdown
												style={styles.dropdown}
												containerStyle={{
													marginTop:
														Platform.OS ===
														"android"
															? -30
															: 0,
												}}
												placeholderStyle={
													styles.placeholder
												}
												selectedTextStyle={
													styles.selectedText
												}
												inputSearchStyle={
													styles.inputSearch
												}
												data={years}
												dropdownPosition="bottom"
												maxHeight={300}
												searchPlaceholder="Пошук..."
												labelField="label"
												valueField="value"
												placeholder="Оберіть рік"
												search
												value={value?.toString()}
												onChange={(item) => {
													onChange(item.value);
													console.log(item);
												}}
											/>
										</View>
									);
								}}
							/>
						</View>
						<View style={styles.buttons}>
							<Button
								variant="outline"
								text="Скасувати"
								onPress={() => {
									onClose();
									clearInputs();
								}}
								disabled={isLoading}
							/>
							<Button
								variant="fill"
								text={
									isLoading || isLoadingTags
										? "..."
										: "Зберегти"
								}
								onPress={async () => {
									await handleSubmit(onSubmit)();
									onClose();
									clearInputs();
								}}
								disabled={isLoading || isLoadingTags}
							/>
						</View>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</Modal>
	);
}
