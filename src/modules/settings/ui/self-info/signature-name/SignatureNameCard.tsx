import { Text, View } from "react-native";
import { styles } from "./signature-name.styles";
import { ModalSignatureUpdate } from "../modal-canvas-signature";
import { useState } from "react";
import { COLORS } from "@shared/constants/colors";
import { useUserContext } from "@modules/auth/context/user.context";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signatureValidator } from "@modules/settings/models/validators";
import { SignatureCardT } from "@modules/settings/models/types";
import { useUpdateSignatureMutation } from "@modules/settings/api";
import { Button } from "@shared/ui/button";
import { Icons } from "@shared/ui/icons";

export function SignatureNameCard() {
	const { user, setUser } = useUserContext();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [updateSignature, { isLoading }] = useUpdateSignatureMutation();

	const [isSignatureModalVisible, setIsSignatureModalVisible] =
		useState<boolean>(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(signatureValidator),
		mode: "onChange",
		defaultValues: {
			signature: undefined,
		},
	});

	async function onSubmit(data: SignatureCardT) {
		if (!data.signature) return;
		try {
			const response = await updateSignature({
				signature: data.signature,
			}).unwrap();
			setUser(response);
			setValue("signature", null);
		} catch (error) {
			console.error("Error updating signature:", error);
		}
	}

	return (
		<View style={[styles.container, isEdit && styles.focus]}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>Варіанти підпису</Text>
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
					disabled={isLoading}
				/>
			</View>
			<View style={styles.body}>
				<View style={styles.internalContainer}>
					<View
						style={[
							styles.signatureNameContainer,
							isEdit && styles.signatureNameContainerEdit,
						]}
					>
						<Icons.CheckBoxIcon />
						<Text style={styles.signatureName}>
							Псевдонім автора
						</Text>
					</View>
					<Text style={styles.bodyText}>
						{user?.surname} {user?.firstName}
					</Text>
				</View>
				<Controller
					name="signature"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<View style={styles.internalContainer}>
								<View
									style={[
										styles.signatureNameContainer,
										isEdit &&
											styles.signatureNameContainerEdit,
									]}
								>
									<Icons.CheckBoxIcon />
									<Text style={styles.signatureName}>
										Мій електроний підпис
									</Text>
								</View>
								<View
									style={[
										styles.signatureContainer,
										isEdit && styles.signatureContainerEdit,
									]}
								>
									{user?.signature ? (
										<Image
											source={{
												uri: `http://192.168.50.244:8000/media/original/${user.signature}`,
											}}
											style={styles.signatureImage}
										/>
									) : (
										<Text style={styles.bodyText}>
											Підпис відсутній {user?.signature}
										</Text>
									)}
								</View>
								{isEdit && (
									<Button
										variant="outline"
										text="Редагувати підпис"
										onPress={() =>
											setIsSignatureModalVisible(true)
										}
									/>
								)}
							</View>
						);
					}}
				/>
			</View>
			<ModalSignatureUpdate
				onClose={() => {
					setIsSignatureModalVisible(false);
				}}
				onSave={(base64) => {
					setValue("signature", base64);
				}}
				visible={isSignatureModalVisible}
			/>
		</View>
	);
}
