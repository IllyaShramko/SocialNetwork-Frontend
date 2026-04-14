import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./main-card.styles";
import { Button, Icons, Input } from "@shared/ui";
import { useUserContext } from "@modules/auth/context/user.context";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { COLORS } from "@shared/constants/colors";
import { useUpdateMutation } from "@modules/settings/api";
import { UpdateUserProfileCredentaials } from "@modules/settings/api/api.types";
import { mainCardValidator } from "@modules/settings/models/validators";
import { MainCardT } from "@modules/settings/models/types";
import { PasswordCard } from "./password-card";

export function MainCard() {
	const { user, setUser } = useUserContext();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isGlobalEdit, setGlobalEdit] = useState<boolean>(false);
	const [update, { isLoading }] = useUpdateMutation();
	const { handleSubmit, control } = useForm<MainCardT>({
		resolver: yupResolver(mainCardValidator) as any,
		mode: "onChange",
		defaultValues: {
			firstName: user?.firstName || "",
			surname: user?.surname || "",
			email: user?.email || "",
			birthday: user?.birthday ? new Date(user.birthday) : null,
		},
	});

	async function onSubmit(data: MainCardT) {
		const updateData: UpdateUserProfileCredentaials = {
			firstName: data.firstName || undefined,
			surname: data.surname || undefined,
			email: data.email,
			birthday: data.birthday || undefined,
		};
		try {
			const response = await update(updateData).unwrap();
			setUser(response);
		} catch (error) {
			console.error("Error updating profile:", error);
		}
	}

	return (
		<View
			style={[styles.container, (isEdit || isGlobalEdit) && styles.focus]}
		>
			<View style={styles.header}>
				<Text style={styles.textHeader}>Картка профілю</Text>
				<Button
					variant="outline"
					iconLeft={<Icons.EditIcon />}
					text={isEdit ? "Зберегти" : undefined}
					onPress={() => {
						setIsEdit((prev) => !prev);
						if (isEdit) {
							handleSubmit(onSubmit)();
						}
					}}
					style={isEdit && { backgroundColor: COLORS.plum50 }}
				/>
			</View>
			<View style={styles.body}>
				<Controller
					name="firstName"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Введіть ім'я"
								label="Ім'я"
								onChangeText={field.onChange}
								value={field.value ?? ""}
								error={fieldState.error?.message}
								accessable={isEdit}
							/>
						);
					}}
				/>
				<Controller
					name="surname"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Введіть прізвище"
								label="Прізвище"
								onChangeText={field.onChange}
								value={field.value ?? ""}
								error={fieldState.error?.message}
								accessable={isEdit}
							/>
						);
					}}
				/>
				<Controller
					name="birthday"
					control={control}
					render={({ field, fieldState }) => (
						<Input
							placeholder="DD/MM/YYYY"
							label="Дата народження"
							onChangeText={(text) =>
								field.onChange(text ? new Date(text) : null)
							}
							value={
								field.value
									? field.value.toLocaleDateString()
									: ""
							}
							error={fieldState.error?.message}
							accessable={isEdit}
						/>
					)}
				/>
				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="example@example.com"
								label="Email"
								onChangeText={field.onChange}
								value={field.value ?? ""}
								error={fieldState.error?.message}
								accessable={isEdit}
							/>
						);
					}}
				/>
			</View>
			<PasswordCard setGlobalEdit={setGlobalEdit} />
		</View>
	);
}
