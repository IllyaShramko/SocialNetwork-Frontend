import { yupResolver } from "@hookform/resolvers/yup";
import { Text, View } from "react-native";
import { styles } from "./registraion.styles";
import { Button, Icons, Input, SubLink } from "@shared/ui";
import { Controller, useForm } from "react-hook-form";
import { registerValidator } from "../../../models/validators/register.validation";
import { type RegForm } from "../../../models/types/registration.types";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export function RegistrationStepOne() {
	const { handleSubmit, control } = useForm<RegForm>({
		resolver: yupResolver(registerValidator),
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	function onSubmit(data: RegForm) {
		setIsLoading(true);
		// router.push({
		// 	pathname: "/register/step-two",
		// 	params: data,
		// });
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
					<Text style={styles.welcomeText}>Приєднуйся до World IT</Text>
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
									error={fieldState.error?.message}
									accessable={!isLoading}
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
									accessable={!isLoading}
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
									accessable={!isLoading}
								/>
							);
						}}
					/>
				</View>
				<View>
					<Button
						variant="fill"
						text={isLoading ? "Надсилаємо код..." : "Створити акаунт"}
						onPress={handleSubmit(onSubmit)}
						disabled={isLoading}
						style={{ paddingHorizontal: 24, paddingVertical: 16 }}
					/>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}
