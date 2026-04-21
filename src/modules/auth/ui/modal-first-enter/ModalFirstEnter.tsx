import { View, Text, Modal } from "react-native";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Controller, useForm } from "react-hook-form";
import { useUpdateMutation } from "@modules/settings/api";
import { useUserContext } from "@modules/auth/context/user.context";
import { detailsFormData, ModalProps } from "./modal.types";
import { styles } from "./modal.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { firstEnterValidator } from "@modules/auth/models/validators";
import { FirstEnterT } from "@modules/auth/models/types";

export function FirstEnterModal({ isVisible, onClose }: ModalProps) {
	const { user, setUser } = useUserContext();
	const { handleSubmit, control } = useForm<FirstEnterT>({
		resolver: yupResolver(firstEnterValidator),
		defaultValues: {
			pseyudonim: undefined,
			username: undefined,
		},
	});
	const [updateUser, { isLoading }] = useUpdateMutation();

	const handleConfirm = async (data: detailsFormData) => {
		const cleanPseyudonim = data.pseyudonim?.trim();
		let cleanUsername = data.username?.trim();
		if (cleanUsername?.startsWith("@")) {
			cleanUsername = cleanUsername.split("@")[1];
		}
		try {
			const response = await updateUser({
				username: cleanUsername,
			}).unwrap();
            setUser(response)
			onClose();
		} catch (err) {
			onClose();
		}
	};
	if (user && !user.username) {
		return (
			<Modal
				visible={isVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent
			>
				<View style={styles.overlay}>
					<KeyboardAwareScrollView
						contentContainerStyle={styles.scrollContainer}
						keyboardShouldPersistTaps="handled"
					>
						<View style={styles.modalCard}>
							<Text style={styles.title}>
								Додай деталі про себе
							</Text>

							<View style={styles.inputGap}>
								<Controller
									name="pseyudonim"
									control={control}
									defaultValue={undefined}
									render={({ field, fieldState }) => (
										<Input
											label="Псевдонім автора"
											inputMode="text"
											autoCapitalize="none"
											autoComplete="off"
											placeholder="Введіть Псевдонім автора"
											onChangeText={field.onChange}
											accessable={!isLoading}
											value={field.value}
											error={fieldState.error?.message}
										/>
									)}
								/>

								<Controller
									name="username"
									control={control}
									defaultValue={user?.username ?? ""}
									render={({ field, fieldState }) => (
										<Input
											label="Ім’я користувача"
											inputMode="text"
											autoCapitalize="none"
											autoComplete="off"
											placeholder="@"
											onChangeText={field.onChange}
											accessable={!isLoading}
											value={field.value}
											error={fieldState.error?.message}
										/>
									)}
								/>
							</View>

							<Text style={styles.hint}>
								Або оберіть:{" "}
								<Text style={styles.highlight}>
									(Запропоновані варіанти відповідно до Ім’я
									та Прізвища)
								</Text>
							</Text>

							<View style={styles.footer}>
								<Button
									variant="fill"
									text={isLoading ? "..." : "Продовжити"}
									onPress={handleSubmit(handleConfirm)}
									disabled={isLoading}
								/>
							</View>
						</View>
					</KeyboardAwareScrollView>
				</View>
			</Modal>
		);
	}
}
