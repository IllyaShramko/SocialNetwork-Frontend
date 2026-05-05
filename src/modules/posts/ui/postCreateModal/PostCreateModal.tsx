import { Modal, Text, TouchableOpacity, View } from "react-native";
import { ModalCreatePostProps } from "./post-create-modal.types";
import { Icons } from "@shared/ui/icons";
import { useTagsQuery } from "../../@x/api";
import { Input } from "@shared/ui/input";
import { useState } from "react";
import { Tag } from "./tag/Tag";
import { styles } from "./post-create-modal.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Button } from "@shared/ui/button";
import { postCreateType, postCreateValidator } from "@modules/posts/models";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { pickImage } from "@shared/tools/pick-image";
import { Image } from "expo-image";
import { useCreatePostMutation } from "../../api";
import { PostCreateDto } from "../../api/api.types";

export function PostCreateModal(props: ModalCreatePostProps) {
	const { visible, onClose } = props;
	const { data, isLoading: isLoadingTags } = useTagsQuery();
	const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);
	const [createPost, { data: dataPost, isLoading }] = useCreatePostMutation();

	const {
		control,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(postCreateValidator),
		defaultValues: {
			links: [""],
			tagIds: [],
			images: [],
		},
	});

	const currentImages = watch("images") || [];

	const handlePickImages = async () => {
		const result = await pickImage(false, {
			allowsMultipleSelection: true,
			mediaTypes: ["images"],
			quality: 0.8,
			selectionLimit: 7 - currentImages.length,
		});
		console.log(result);
		if (result.status === "ok") {
			const newImages = result.assets.map((asset) => ({
				uri: asset.uri,
			}));
			const combined = [...currentImages, ...newImages].slice(0, 7);
			setValue("images", combined, { shouldValidate: true });
		}
	};

	const handleRemoveImage = (uri: string) => {
		const filtered = currentImages.filter((img) => img.uri !== uri);
		setValue("images", filtered, { shouldValidate: true });
	};

	const handleOnSubmit = async (data: postCreateType) => {
		data.tagIds = selectedTagIds;
		console.log(data);
		try {
			const response = await createPost(data as PostCreateDto).unwrap();
			console.log(`response: \n${response}`);
			onClose();
			reset();
			setSelectedTagIds([]);
		} catch (error) {
			console.log(error);
		}
	};

	const handlePress = (id: number) => {
		setSelectedTagIds((prev) =>
			prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
		);
		setValue("tagIds", selectedTagIds);
	};

	const handleAddLink = () => {
		const currentLinks = watch("links") || [];
		if (currentLinks.length < 3) {
			setValue("links", [...currentLinks, ""]);
		}
	};

	const handleRemoveLink = (index: number) => {
		const currentLinks = watch("links") || [];
		const newLinks = currentLinks.filter((_, i) => i !== index);
		setValue("links", newLinks.length ? newLinks : [""], {
			shouldValidate: true,
		});
	};

	return (
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			onRequestClose={() => {
				onClose();
			}}
			statusBarTranslucent
		>
			<View style={styles.overlay}>
				<KeyboardAwareScrollView
					bottomOffset={20}
					contentContainerStyle={styles.scrollContainer}
					keyboardShouldPersistTaps="handled"
				>
					<View style={styles.modal}>
						<View>
							<View style={{ alignItems: "flex-end" }}>
								<TouchableOpacity onPress={onClose} style={styles.closeBtn}>
									<Icons.CloseIcon />
								</TouchableOpacity>
							</View>
							<Text style={styles.headerText}>
								Створення публікації
							</Text>
						</View>
						<View style={styles.body}>
							<Controller
								name="title"
								control={control}
								render={({ field, fieldState }) => {
									return (
										<Input
											placeholder="Напишіть назву публікації"
											inputMode="text"
											autoCapitalize="none"
											autoComplete="off"
											autoCorrect={false}
											onChangeText={field.onChange}
											value={field.value}
											label="Назва публікації"
											error={fieldState.error?.message}
											accessable={visible}
										/>
									);
								}}
							/>
							<Controller
								name="topic"
								control={control}
								render={({ field, fieldState }) => {
									return (
										<Input
											placeholder="Напишіть тему публікації"
											inputMode="text"
											autoCapitalize="none"
											autoComplete="off"
											autoCorrect={false}
											onChangeText={field.onChange}
											value={field.value}
											label="Тема публікації"
											error={fieldState.error?.message}
											accessable={visible}
										/>
									);
								}}
							/>

							<View style={styles.tags}>
								{!data || isLoadingTags
									? null
									: data.map((tag, index) => (
											<Controller
												key={tag.id}
												control={control}
												name="tagIds"
												render={({
													field: { onChange, value },
												}) => (
													<View style={styles.tags}>
														<Tag
															tag={tag}
															isSelected={selectedTagIds.includes(
																tag.id,
															)}
															onPress={() => {
																handlePress(
																	tag.id,
																);
															}}
														/>
													</View>
												)}
											/>
										))}
							</View>

							<Controller
								name="content"
								control={control}
								render={({ field, fieldState }) => {
									return (
										<Input
											placeholder="Напишіть опис до публікації..."
											inputMode="text"
											autoCapitalize="none"
											autoComplete="off"
											autoCorrect={false}
											onChangeText={field.onChange}
											value={field.value}
											label="Назва публікації"
											error={fieldState.error?.message}
											accessable={visible}
											multiline={true}
											numberOfLines={7}
											style={styles.textArea}
											textAlignVertical="top"
										/>
									);
								}}
							/>
							<View style={styles.links}>
								<Text style={styles.textLabel}>Посилання</Text>
								{watch("links")?.map((_, index) => {
									const isLast =
										index ===
										(watch("links")?.length || 0) - 1;
									const canAddMore =
										(watch("links")?.length || 0) < 3;
									const link = watch(`links.${index}`);
									const isValueNotEmpty =
										link && link.trim().length > 0;

									return (
										<View
											key={index}
											style={styles.inputWrapper}
										>
											<View style={{ flex: 1 }}>
												<Controller
													control={control}
													name={`links.${index}`}
													render={({
														field: {
															onChange,
															onBlur,
															value,
														},
													}) => (
														<Input
															accessable={visible}
															value={value}
															onChangeText={
																onChange
															}
															onBlur={onBlur}
															placeholder="https://..."
															error={
																errors.links?.[
																	index
																]?.message
															}
															autoCapitalize="none"
															autoComplete="url"
															keyboardType="url"
														/>
													)}
												/>
											</View>

											{isLast &&
												canAddMore &&
												isValueNotEmpty && (
													<TouchableOpacity
														style={
															styles.plusButton
														}
														onPress={handleAddLink}
													>
														<Icons.PlusIcon />
													</TouchableOpacity>
												)}

											{!isLast && (
												<TouchableOpacity
													style={styles.plusButton}
													onPress={() =>
														handleRemoveLink(index)
													}
												>
													<Icons.CloseIcon />
												</TouchableOpacity>
											)}
										</View>
									);
								})}
							</View>
							<View style={styles.imageGrid}>
								{currentImages.map((img, index) => (
									<View
										key={img.uri}
										style={styles.imageWrapper}
									>
										<Image
											source={{ uri: img.uri }}
											style={styles.previewImage}
										/>
										<Button
											variant={"outline"}
											iconLeft={<Icons.DeleteIcon />}
											style={styles.deleteBadge}
											onPress={() =>
												handleRemoveImage(img.uri)
											}
										/>
									</View>
								))}
								{errors.images && (
									<Text style={styles.errorText}>
										{errors.images.message}
									</Text>
								)}
							</View>
						</View>
						<View style={styles.footer}>
							<Button
								variant="outline"
								iconLeft={<Icons.GalaryIcon />}
								onPress={handlePickImages}
								disabled={currentImages.length >= 7}
							/>
							<Button
								variant="fill"
								text="Створити"
								iconRight={<Icons.SendIcon />}
								onPress={handleSubmit(handleOnSubmit)}
							/>
						</View>
					</View>
				</KeyboardAwareScrollView>
			</View>
		</Modal>
	);
}
