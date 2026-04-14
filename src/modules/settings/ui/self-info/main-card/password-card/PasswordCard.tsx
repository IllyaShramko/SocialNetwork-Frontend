import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./password-card.styles";
import { Button, Icons, Input } from "@shared/ui";
import { useUserContext } from "@modules/auth/context/user.context";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { COLORS } from "@shared/constants/colors";
import { ModalResetPassword } from "../../modal-reset-password/ModalResetPassword";
import { PasswordCardT } from "@modules/settings/models/types";
import { passwordValidator } from "@modules/settings/models/validators";
import { PasswordCardProps } from "./password-card.types";
import { useNewPasswordContext } from "@modules/settings/context/new-password.context";
import { usePasswordGenerateCodeMutation } from "@modules/settings/api";

export function PasswordCard({ setGlobalEdit }: PasswordCardProps) {
	const { user, setUser } = useUserContext();
	const { setNewPassword } = useNewPasswordContext();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [generateCode, { isLoading, error }] =
		usePasswordGenerateCodeMutation();
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<PasswordCardT>({
		resolver: yupResolver(passwordValidator),
		mode: "onChange",
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	async function onSubmit(data: PasswordCardT) {
		console.log("Збереження даних профілю:", data);
		if (!user) {
			return;
		}
		try {
			const response = await generateCode({ email: user.email }).unwrap();
			setNewPassword(data.password);
			setIsVisibleModal(true);
		} catch (error) {
			console.error("Error updating username:", error);
		}
	}
	async function onClose() {
		setIsVisibleModal(false);
		setGlobalEdit(false);
		setIsEdit(false);
	}

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.textHeader}>Пароль</Text>
				<Button
					variant="outline"
					iconLeft={<Icons.EditIcon />}
					text={isEdit ? "Зберегти" : undefined}
					onPress={() => {
						if (isEdit) {
							if (Object.keys(errors).length !== 0) {
								return;
							}
							handleSubmit(onSubmit)();
						} else {
							setGlobalEdit(true);
						}
						setIsEdit(true);
					}}
					style={isEdit && { backgroundColor: COLORS.plum50 }}
				/>
			</View>
			<View style={styles.body}>
				<Controller
					name="password"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Input.Password
								placeholder="Введіть новий пароль"
								label="Новий пароль"
								onChangeText={field.onChange}
								value={field.value}
								error={fieldState.error?.message}
								accessable={isEdit}
							/>
						);
					}}
				/>
				{isEdit && (
					<Controller
						name="confirmPassword"
						control={control}
						render={({ field, fieldState }) => {
							return (
								<Input.Password
									placeholder="Підтвердіть пароль"
									label="Підтвердіть новий пароль"
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
									accessable={isEdit}
								/>
							);
						}}
					/>
				)}
			</View>

			<ModalResetPassword visible={isVisibleModal} onClose={onClose} />
		</View>
	);
}
