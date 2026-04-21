import {
	Modal,
	Platform,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { ModalCreateAlbumProps } from "./modal.types";
import {
	KeyboardAvoidingView,
	KeyboardAwareScrollView,
} from "react-native-keyboard-controller";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAlbumT } from "@modules/settings/models/types";
import { createAlbumValidator } from "@modules/settings/models/validators";
import { useAlbumCreateMutation, useTagsQuery } from "@modules/settings/api";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./modal.styles";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Icons } from "@shared/ui/icons";

export function ModalCreateAlbum(props: ModalCreateAlbumProps) {
	const { visible, onClose } = props;
	const { data, isLoading: isLoadingTags } = useTagsQuery();
	const [albumCreate, { isLoading }] = useAlbumCreateMutation();
	const { handleSubmit, control, setValue, resetField } =
		useForm<CreateAlbumT>({
			resolver: yupResolver(createAlbumValidator),
			mode: "onChange",
			defaultValues: {
				name: undefined,
				topicId: undefined,
				year: 2000,
			},
		});

	function clearInputs() {
		resetField("name");
		resetField("topicId");
		resetField("year");
	}
	async function onSubmit(data: CreateAlbumT) {
		try {
			const response = await albumCreate(data).unwrap();
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
								Створити альбом
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
												value={value}
												onChange={(item) =>
													onChange(item.value)
												}
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
							/>
							<Button
								variant="fill"
								text="Зберегти"
								onPress={async () => {
									await handleSubmit(onSubmit)();
									onClose();
									clearInputs();
								}}
							/>
						</View>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</Modal>
	);
}
