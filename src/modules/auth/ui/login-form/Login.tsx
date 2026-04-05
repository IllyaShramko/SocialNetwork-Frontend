import { yupResolver } from "@hookform/resolvers/yup";
import { Text, View } from "react-native";
import { styles } from "./login.styles";
import { Button, Input, SubLink } from "@shared/ui";
import { Controller, useForm } from "react-hook-form";
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { LoginFormT } from "@modules/auth/models/types/login.types";
import { loginValidator } from "@modules/auth/models/validators/login.validation";

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
	const [isLoading, setIsLoading] = useState<boolean>(false);

	function onSubmit(data: LoginFormT) {
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
