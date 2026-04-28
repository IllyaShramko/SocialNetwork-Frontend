import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./profile-card.styles";
import { Image } from "expo-image";
import { useUserContext } from "@modules/auth/context/user.context";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileCardValidator } from "@modules/settings/models/validators";
import { COLORS } from "@shared/constants/colors";
import {
	useUpdateAvatarMutation,
	useUpdateMutation,
} from "@modules/settings/api";
import { ProfileCardT } from "@modules/settings/models/types/profile-update.types";
import { Button } from "@shared/ui/button";
import { pickImage } from "@shared/tools/pick-image";
import { Icons } from "@shared/ui/icons";
import { Input } from "@shared/ui/input";
import { ENV } from "@shared/constants/env";

export function ProfileCard() {
	const { user, setUser } = useUserContext();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isUpdatedAvatar, setIsUpdatedAvatar] = useState<boolean>(false);
	const [updateAvatar, { isLoading }] = useUpdateAvatarMutation();
	const [update, { isLoading: isUpdating }] = useUpdateMutation();
	const [avatarUrl, setAvatarUrl] = useState<string>(
		user?.avatars.length !== 0 && user?.avatars[0]
			? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${user.avatars[0].image.filename}`
			: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`,
	);
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(profileCardValidator),
		mode: "onChange",
		defaultValues: {
			username: user?.username || "",
			avatar: undefined,
		},
	});

	async function onSubmit(data: ProfileCardT) {
		if (data.avatar !== undefined && data.avatar && isUpdatedAvatar) {
			console.log(data);
			try {
				const response = await updateAvatar({
					avatar: data.avatar,
				}).unwrap();
				setUser(response);
				console.log(response.avatars[0].image.filename);
				setAvatarUrl(
					`http://${ENV.HOST}:${ENV.PORT}/media/thumb/${response.avatars[0].image.filename}`,
				);
				setIsUpdatedAvatar(false);
			} catch (error) {
				console.error("Error updating avatar:", error);
			}
		}
		if (data.username !== user?.username) {
			try {
				const response = await update({
					username: data.username,
				}).unwrap();
				setUser(response);
			} catch (error) {
				console.error("Error updating username:", error);
			}
		}
	}
		

	return (
		<View style={[styles.container, isEdit && styles.focus]}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>Картка профілю</Text>
				<Button
					variant="outline"
					iconLeft={<Icons.EditIcon />}
					text={isEdit ? "Зберегти" : undefined}
					onPress={async () => {
						if (isEdit) {
							await handleSubmit(onSubmit)();
							if (Object.keys(errors).length !== 0) {
								return;
							}
						}
						setIsEdit((prev) => !prev);
					}}
					style={isEdit && { backgroundColor: COLORS.plum50 }}
					disabled={isLoading || isUpdating}
				/>
			</View>
			<View style={styles.body}>
				<Controller
					name="avatar"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<View style={styles.avatarContainer}>
								{isEdit && (
									<Text style={styles.textAvatarHead}>
										Оберіть або завантажте фото профілю
									</Text>
								)}
								<View style={styles.avatarBlock}>
									<TouchableOpacity
										disabled={!isEdit}
									>
										<Image
											style={styles.avatar}
											source={{
												uri: avatarUrl,
											}}
										/>
									</TouchableOpacity>
								</View>
								{isEdit && (
									<View style={styles.buttonsContainer}>
										<TouchableOpacity
											style={styles.button}
											onPress={async () => {
												const assets = await pickImage(
													false,
													{
														selectionLimit: 1,
														allowsMultipleSelection: false,
														allowsEditing: true,
														aspect: [1, 1],
														mediaTypes: ["images"],
													},
												);
												if (assets.status === "error") {
													Alert.alert(
														"Error occured",
														assets.message,
													);
													return;
												}
												const image = assets.assets[0];
												setAvatarUrl(image.uri);
												setIsUpdatedAvatar(true);
												field.onChange(image.uri);
											}}
										>
											<Icons.PlusIcon />
											<Text style={styles.buttonText}>
												Додайте фото
											</Text>
										</TouchableOpacity>
										<TouchableOpacity
											style={styles.button}
											onPress={async () => {
												const assets = await pickImage(
													false,
													{
														selectionLimit: 1,
														allowsMultipleSelection: false,
														allowsEditing: true,
														aspect: [1, 1],
														mediaTypes: ["images"],
													},
												);
												if (assets.status === "error") {
													Alert.alert(
														"Error occured",
														assets.message,
													);
													return;
												}
												const image = assets.assets[0];
												setAvatarUrl(image.uri);
												setIsUpdatedAvatar(true);
												field.onChange(image.uri);
											}}
										>
											<Icons.GalaryIcon />
											<Text style={styles.buttonText}>
												Оберіть фото
											</Text>
										</TouchableOpacity>
									</View>
								)}
							</View>
						);
					}}
				/>
				<View>
					<Text style={styles.surnameName}>
						{user?.surname} {user?.firstName}
					</Text>
				</View>
				{isEdit ? (
					<Controller
						name="username"
						control={control}
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="@username"
									label="Ім'я користувача"
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
									accessable={isEdit}
								/>
							);
						}}
					/>
				) : (
					<Text style={styles.username}>@{user?.username}</Text>
				)}
			</View>
		</View>
	);
}
