import {
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Platform,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { styles } from "./modal.styles";
import { Controller, useForm } from "react-hook-form";
import { Button, Icons, Input } from "@shared/ui";
import { RegFormStepTwo } from "@modules/auth/models/types";
import { useRef, useState } from "react";
import { registerValidators } from "@modules/auth/models/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useValidateCodeMutation } from "@modules/auth/api";
import { useUserContext } from "@modules/auth/context/user.context";
import { useNewPasswordContext } from "@modules/settings/context/new-password.context";
import { ModalResetPasswordProps } from "./modal.types";
import { useSetNewPasswordMutation } from "@modules/settings/api";

export function ModalResetPassword(props: ModalResetPasswordProps) {
	const { visible, onClose } = props;
	const { setToken, user } = useUserContext();
	const { newPassword } = useNewPasswordContext();
	const [newPasswordMutation, { isLoading }] = useSetNewPasswordMutation();
	const [validateCodeMutation, { isLoading: isValidateCodeLoading }] =
		useValidateCodeMutation();

	const { handleSubmit, control, setValue } = useForm<RegFormStepTwo>({
		resolver: yupResolver(registerValidators.stepTwo),
		mode: "onChange",
		defaultValues: {
			firstNumber: undefined,
			secondNumber: undefined,
			thirdNumber: undefined,
			fourthNumber: undefined,
			fivethNumber: undefined,
			sixthNumber: undefined,
		},
	});
	const [errorMessage, setErrorMessage] = useState<string>("");

	const inputRefs = {
		firstNumber: useRef<TextInput>(null),
		secondNumber: useRef<TextInput>(null),
		thirdNumber: useRef<TextInput>(null),
		fourthNumber: useRef<TextInput>(null),
		fivethNumber: useRef<TextInput>(null),
		sixthNumber: useRef<TextInput>(null),
	};

	const fieldNames = [
		"firstNumber",
		"secondNumber",
		"thirdNumber",
		"fourthNumber",
		"fivethNumber",
		"sixthNumber",
	];

	const handleBackspace = (fieldName: string, currentValue?: string) => {
		if (!currentValue || currentValue.length === 0) {
			const index = fieldNames.indexOf(fieldName);
			if (index > 0) {
				const prevFieldName = fieldNames[
					index - 1
				] as keyof typeof inputRefs;
				inputRefs[prevFieldName].current?.focus();
				setValue(prevFieldName as keyof RegFormStepTwo, "");
			}
		}
	};

	async function onSubmit(data: RegFormStepTwo) {
		const code = `${data.firstNumber}${data.secondNumber}${data.thirdNumber}${data.fourthNumber}${data.fivethNumber}${data.sixthNumber}`;
		if (!user) return;
		try {
			const codeValidationResponse = await validateCodeMutation({
				email: user.email,
				code,
			}).unwrap();
			if (codeValidationResponse.message !== "SUCCESS") {
				setErrorMessage("Невірний код підтвердження");
				return;
			}
			if (!newPassword) return;
			await newPasswordMutation({ newPassword }).unwrap();
			onClose();
		} catch (error) {
			setErrorMessage("Помилка при підтвердженні коду");
		}
	}

	return (
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			onRequestClose={onClose}
		>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
			>
				<ScrollView
					contentContainerStyle={styles.overlay}
					bounces={false}
					keyboardShouldPersistTaps="handled"
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.container}>
						<View style={styles.closeView}>
							<TouchableOpacity
								style={styles.closeBtn}
								onPress={onClose}
							>
								<Icons.CloseIcon />
							</TouchableOpacity>
						</View>
						<View>
							<Text style={styles.welcomeText}>
								Підтвердження для зміни паролю
							</Text>
						</View>
						<View>
							<Text style={styles.descriptionText}>
								Ми надіслали 6-значний код на вашу пошту (
								{user?.email}). Введіть його нижче, щоб
								підтвердити акаунт
							</Text>
						</View>
						<View>
							<Text style={styles.label}>Код підтвердження</Text>
							<View style={styles.inputs}>
								<View style={styles.internalInputs}>
									<Controller
										name="firstNumber"
										control={control}
										render={({ field, fieldState }) => (
											<Input.CodeNumber
												ref={inputRefs.firstNumber}
												placeholder="__"
												inputMode="numeric"
												autoCapitalize="none"
												autoComplete="one-time-code"
												autoCorrect={false}
												onChangeText={(text) =>
													field.onChange(text)
												}
												onNextField={() =>
													inputRefs.secondNumber.current?.focus()
												}
												onBackspace={() =>
													handleBackspace(
														field.name,
														field.value,
													)
												}
												accessable={!isLoading}
												isError={
													!!fieldState.error?.message
												}
											/>
										)}
									/>
									<Controller
										name="secondNumber"
										control={control}
										render={({ field, fieldState }) => (
											<Input.CodeNumber
												ref={inputRefs.secondNumber}
												placeholder="__"
												inputMode="numeric"
												autoCapitalize="none"
												autoComplete="one-time-code"
												autoCorrect={false}
												onChangeText={(text) =>
													field.onChange(text)
												}
												onNextField={() =>
													inputRefs.thirdNumber.current?.focus()
												}
												onBackspace={() =>
													handleBackspace(
														field.name,
														field.value,
													)
												}
												accessable={!isLoading}
												isError={
													!!fieldState.error?.message
												}
											/>
										)}
									/>
								</View>
								<View style={styles.internalInputs}>
									<Controller
										name="thirdNumber"
										control={control}
										render={({ field, fieldState }) => (
											<Input.CodeNumber
												ref={inputRefs.thirdNumber}
												placeholder="__"
												inputMode="numeric"
												autoCapitalize="none"
												autoComplete="one-time-code"
												autoCorrect={false}
												onChangeText={(text) =>
													field.onChange(text)
												}
												onNextField={() =>
													inputRefs.fourthNumber.current?.focus()
												}
												onBackspace={() =>
													handleBackspace(
														field.name,
														field.value,
													)
												}
												accessable={!isLoading}
												isError={
													!!fieldState.error?.message
												}
											/>
										)}
									/>
									<Controller
										name="fourthNumber"
										control={control}
										render={({ field, fieldState }) => (
											<Input.CodeNumber
												ref={inputRefs.fourthNumber}
												placeholder="__"
												inputMode="numeric"
												autoCapitalize="none"
												autoComplete="one-time-code"
												autoCorrect={false}
												onChangeText={(text) =>
													field.onChange(text)
												}
												onNextField={() =>
													inputRefs.fivethNumber.current?.focus()
												}
												onBackspace={() =>
													handleBackspace(
														field.name,
														field.value,
													)
												}
												accessable={!isLoading}
												isError={
													!!fieldState.error?.message
												}
											/>
										)}
									/>
								</View>
								<View style={styles.internalInputs}>
									<Controller
										name="fivethNumber"
										control={control}
										render={({ field, fieldState }) => (
											<Input.CodeNumber
												ref={inputRefs.fivethNumber}
												placeholder="__"
												inputMode="numeric"
												autoCapitalize="none"
												autoComplete="one-time-code"
												autoCorrect={false}
												onChangeText={(text) =>
													field.onChange(text)
												}
												onNextField={() =>
													inputRefs.sixthNumber.current?.focus()
												}
												onBackspace={() =>
													handleBackspace(
														field.name,
														field.value,
													)
												}
												accessable={!isLoading}
												isError={
													!!fieldState.error?.message
												}
											/>
										)}
									/>
									<Controller
										name="sixthNumber"
										control={control}
										render={({ field, fieldState }) => (
											<Input.CodeNumber
												ref={inputRefs.sixthNumber}
												placeholder="__"
												inputMode="numeric"
												autoCapitalize="none"
												autoComplete="one-time-code"
												autoCorrect={false}
												onChangeText={(text) =>
													field.onChange(text)
												}
												onBackspace={() =>
													handleBackspace(
														field.name,
														field.value,
													)
												}
												accessable={!isLoading}
												isError={
													!!fieldState.error?.message
												}
											/>
										)}
									/>
								</View>
							</View>
							{errorMessage && (
								<Text style={styles.errorText}>
									{errorMessage}
								</Text>
							)}
						</View>
						<View style={styles.buttonsContainer}>
							<Button
								variant="outline"
								text="Скасувати"
								onPress={onClose}
								disabled={isLoading || isValidateCodeLoading}
								style={{
									paddingHorizontal: 24,
									paddingVertical: 16,
									flexGrow: 1,
								}}
							/>
							<Button
								variant="fill"
								text={
									isLoading || isValidateCodeLoading
										? "Перевіряємо дані...  "
										: "Підтвердити"
								}
								onPress={handleSubmit(onSubmit)}
								disabled={isLoading || isValidateCodeLoading}
								style={{
									paddingHorizontal: 24,
									paddingVertical: 16,
									flexGrow: 1,
								}}
							/>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</Modal>
	);
}
