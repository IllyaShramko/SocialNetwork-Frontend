import { yupResolver } from "@hookform/resolvers/yup";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./registration.styles";
import { Controller, useForm } from "react-hook-form";
import { registerValidators } from "../../../models/validators/register.validation";
import { RegFormStepTwo } from "../../../models/types/registration.types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useUserContext } from "@modules/auth/context/user.context";
import {
	useRegisterMutation,
	useValidateCodeMutation,
} from "@modules/auth/api";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { isApiError } from "@shared/api/types";

export function RegistrationStepTwo() {
	const { setToken } = useUserContext();
	const [registerMutation, { isLoading }] = useRegisterMutation();
	const [validateCodeMutation, { isLoading: isValidateCodeLoading }] =
		useValidateCodeMutation();

	const params = useLocalSearchParams<{ email: string; password: string }>();
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
	const router = useRouter();
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
		try {
			const codeValidationResponse = await validateCodeMutation({
				email: params.email,
				code,
			}).unwrap();
			if (codeValidationResponse.message !== "SUCCESS") {
				setErrorMessage("Невірний код підтвердження");
				return;
			}
			const registerResponse = await registerMutation({
				email: params.email,
				password: params.password,
			}).unwrap();
			if (!registerResponse.token) {
				setErrorMessage("Помилка при реєстрації");
				return;
			}
			setToken(registerResponse.token);
			router.replace({
				pathname: "/(main)",
				params: { isNewUser: "true" },
			});
		} catch (error) {
			console.log(error)
			if (isApiError(error)) {
				if (error.status === 404) {
					setErrorMessage("Код не знайдений. Перевірьте правильність коду");
					return
				}
			}
			setErrorMessage("Помилка при підтвердженні коду. Спробуйте пізніше");
		}
	}
	return (
		<KeyboardAwareScrollView
			style={{ paddingHorizontal: 16, paddingVertical: 8 }}
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: "center", 
			}}
		>
			<View style={styles.container}>
				<View>
					<Text style={styles.welcomeText}>Підтвердження пошти</Text>
				</View>
				<View>
					<Text style={styles.descriptionText}>
						Ми надіслали 6-значний код на вашу пошту ({params.email}
						). Введіть його нижче, щоб підтвердити акаунт
					</Text>
				</View>
				<View>
					<Text style={styles.label}>Код підтвердження</Text>
					<View style={styles.inputs}>
						<View style={styles.internalInputs}>
							<Controller
								name="firstNumber"
								control={control}
								render={({ field, fieldState }) => {
									return (
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
												!!fieldState.error?.message || !!errorMessage
											}
										/>
									);
								}}
							/>
							<Controller
								name="secondNumber"
								control={control}
								render={({ field, fieldState }) => {
									return (
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
												!!fieldState.error?.message || !!errorMessage
											}
										/>
									);
								}}
							/>
						</View>
						<View style={styles.internalInputs}>
							<Controller
								name="thirdNumber"
								control={control}
								render={({ field, fieldState }) => {
									return (
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
												!!fieldState.error?.message || !!errorMessage
											}
										/>
									);
								}}
							/>
							<Controller
								name="fourthNumber"
								control={control}
								render={({ field, fieldState }) => {
									return (
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
												!!fieldState.error?.message || !!errorMessage
											}
										/>
									);
								}}
							/>
						</View>
						<View style={styles.internalInputs}>
							<Controller
								name="fivethNumber"
								control={control}
								render={({ field, fieldState }) => {
									return (
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
												!!fieldState.error?.message || !!errorMessage
											}
										/>
									);
								}}
							/>
							<Controller
								name="sixthNumber"
								control={control}
								render={({ field, fieldState }) => {
									return (
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
												!!fieldState.error?.message || !!errorMessage
											}
										/>
									);
								}}
							/>
						</View>
					</View>
					{errorMessage && (
						<Text style={styles.errorText}>{errorMessage}</Text>
					)}
				</View>
				<View style={styles.buttonsContainer}>
					<Button
						variant="fill"
						text={
							isLoading || isValidateCodeLoading
								? "Перевіряємо дані..."
								: "Підтвердити"
						}
						onPress={handleSubmit(onSubmit)}
						disabled={isLoading || isValidateCodeLoading}
						style={{ paddingHorizontal: 24, paddingVertical: 16 }}
					/>
					<TouchableOpacity
						onPress={() => {
							if (router.canGoBack()) router.back();
						}}
						style={{ alignSelf: "center", padding: 10 }}
					>
						<Text style={styles.backText}>Назад</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}
