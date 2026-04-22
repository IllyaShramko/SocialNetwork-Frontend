import { yupResolver } from "@hookform/resolvers/yup";
import { Text, View } from "react-native";
import { styles } from "./login.styles";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { LoginFormT } from "@modules/auth/models/types/login.types";
import { loginValidator } from "@modules/auth/models/validators/login.validation";
import { useLoginMutation } from "@modules/auth/api";
import { useUserContext } from "@modules/auth/context/user.context";
import { Input } from "@shared/ui/input";
import { SubLink } from "@shared/ui/subLink";
import { Button } from "@shared/ui/button";
import { useState } from "react";
import { ApiError } from "@shared/api/types";
export function LoginForm() {
	const { handleSubmit, control } = useForm<LoginFormT>({
		resolver: yupResolver(loginValidator),
		mode: "onChange",
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const router = useRouter();
	const [login, { isLoading, error }] = useLoginMutation();
	const [errorAfter, setErrorAfter] = useState<string | null>(null)
	const { setToken } = useUserContext()

	async function onSubmit(data: LoginFormT) {
		try {
			setErrorAfter(null)
			const response = await login(data).unwrap();
			setToken(response.token);
			console.log(response.token);
			router.replace({
				pathname: "/(main)",
				params: { isNewUser: "true" },
			})
		} catch (e) {
			const error = e as ApiError; 
			console.log(error)
			if (error.status === 404 || error.status === 401) {
				setErrorAfter("Неправильна пошта або пароль.");
			} else {
				setErrorAfter("Помилка вхіду, спробуйте пізніше");
			}
		}
	}
	return (
		<KeyboardAwareScrollView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.nav}>
					<SubLink
						text="Реєстрація"
						active={false}
						textStyle={styles.navText}
						onPress={() => {
							router.push("/register/step-one");
						}}
					/>
					<SubLink
						text="Авторизація"
						active={true}
						textStyle={styles.navText}
					/>
				</View>
				<View>
					<Text style={styles.welcomeText}>Раді тебе знову бачити!</Text>
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
					{errorAfter && <Text style={styles.errorText}>{errorAfter}</Text>}
				</View>
				<View>
					<Button
						variant="fill"
						text={isLoading ? "Вхід..." : "Увійти"}
						onPress={handleSubmit(onSubmit)}
						disabled={isLoading}
						style={{ paddingHorizontal: 24, paddingVertical: 16 }}
					/>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}
