import { yupResolver } from "@hookform/resolvers/yup";
import { Text, View } from "react-native";
import { styles } from "./registration.styles";
import { Button, Icons, Input, SubLink } from "@shared/ui";
import { Controller, useForm } from "react-hook-form";
import { registerValidators } from "../../../models/validators/register.validation";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useGenerateCodeMutation } from "@modules/auth/api";
import { RegFormStepOne } from "@modules/auth/models/types/registration.types";

export function RegistrationStepOne() {
	const { handleSubmit, control } = useForm<RegFormStepOne>({
		resolver: yupResolver(registerValidators.stepOne),
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	const router = useRouter();
	const [generateCode, { isLoading: isGeneratingCode, error: generateCodeError }] = useGenerateCodeMutation()
	const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");

	async function onSubmit(data: RegFormStepOne) {
		console.log(data);
		try {
			const codeGenerateReponse = await generateCode({
				email: data.email,
			}).unwrap();
			if (codeGenerateReponse.message === "ALREADY_EXISTS") {
				setErrorMessageEmail("Користувач з такою поштою вже існує");
				return;
			}
			if (codeGenerateReponse.message === "INTERNAL_ERROR") {
				setErrorMessageEmail("Помилка при надсиланні коду підтвердження");
				return;
			}
			router.push({
				pathname: "/register/step-two",
				params: { email: data.email, password: data.password },
			});
		} catch (error) {
			console.log(error)
			return
		}
	}
	return (
		<KeyboardAwareScrollView style={{ paddingHorizontal: 16 }}>
			<View style={styles.container}>
				<View style={styles.nav}>
					<SubLink
						text="Реєстрація"
						active={true}
						textStyle={styles.navText}
					/>
					<SubLink
						text="Авторизація"
						active={false}
						textStyle={styles.navText}
						onPress={() => {
							router.push("/login");
						}}
					/>
				</View>
				<View>
					<Text style={styles.welcomeText}>
						Приєднуйся до World IT
					</Text>
				</View>
				<View style={styles.inputs}>
					<Controller
						name="email"
						control={control}
						render={({ field, fieldState }) => {
							return (
								<Input
									placeholder="you@example.com"
									inputMode="email"
									autoCapitalize="none"
									autoComplete="off"
									autoCorrect={false}
									onChangeText={field.onChange}
									value={field.value}
									label="Електронна пошта"
									error={fieldState.error?.message || errorMessageEmail}
									accessable={!isGeneratingCode}
								/>
							);
						}}
					/>
					<Controller
						name="password"
						control={control}
						render={({ field, fieldState }) => {
							return (
								<Input.Password
									placeholder="Введи пароль"
									inputMode="text"
									autoCapitalize="none"
									autoComplete="off"
									autoCorrect={false}
									onChangeText={field.onChange}
									value={field.value}
									label="Пароль"
									error={fieldState.error?.message}
									accessable={!isGeneratingCode}
								/>
							);
						}}
					/>
					<Controller
						name="confirmPassword"
						control={control}
						render={({ field, fieldState }) => {
							return (
								<Input.Password
									placeholder="Повтори пароль"
									inputMode="text"
									autoCapitalize="none"
									autoComplete="off"
									autoCorrect={false}
									label="Підтверди пароль"
									onChangeText={field.onChange}
									value={field.value}
									error={fieldState.error?.message}
									accessable={!isGeneratingCode}
								/>
							);
						}}
					/>
				</View>
				<View>
					<Button
						variant="fill"
						text={
							isGeneratingCode ? "Надсилаємо код..." : "Створити акаунт"
						}
						onPress={handleSubmit(onSubmit)}
						disabled={isGeneratingCode}
						style={{ paddingHorizontal: 24, paddingVertical: 16 }}
					/>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}
