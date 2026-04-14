import React, { useRef, useState } from "react";
import { Modal, View, Text, TouchableOpacity, Alert } from "react-native";
import SignatureCanvas, {
	SignatureViewRef,
} from "react-native-signature-canvas";
import { styles } from "./modal.styles";
import { COLORS } from "@shared/constants/colors";
import { ModalContentProps } from "./modal.types";

export function ModalSignatureUpdate(props: ModalContentProps) {
	const { visible, onClose, onSave } = props;
	const sigRef = useRef<SignatureViewRef>(null);
	const [isEmpty, setIsEmpty] = useState(true);

	const handleOK = (signature: string) => {
		onSave(signature);
		onClose();
	};

	const handleEmpty = () => {
		Alert.alert("Підпис порожній", "Будь ласка, намалюйте підпис.");
	};

	const handleSavePress = () => {
		sigRef.current?.readSignature();
	};

	const handleClear = () => {
		sigRef.current?.clearSignature();
		setIsEmpty(true);
	};

	return (
		<Modal
			visible={visible}
			animationType="slide"
			presentationStyle="pageSheet"
			onRequestClose={onClose}
		>
			<View style={styles.modalContainer}>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={onClose}
						style={styles.headerBtn}
					>
						<Text style={styles.cancelText}>Скасувати</Text>
					</TouchableOpacity>
					<Text style={styles.title}>Підпис</Text>
					<TouchableOpacity
						onPress={handleClear}
						style={styles.headerBtn}
					>
						<Text style={styles.clearText}>Очистити</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.hint}>Намалюйте підпис у полі нижче</Text>

				<View style={styles.canvasWrapper}>
					<SignatureCanvas
						ref={sigRef}
						onOK={handleOK}
						onEmpty={handleEmpty}
						onBegin={() => setIsEmpty(false)}
						backgroundColor="rgb(255,255,255)"
						penColor={COLORS.blue}
						minWidth={1.5}
						maxWidth={3}
						webStyle={`
							.m-signature-pad {
								box-shadow: none;
								border: none;
								background-color: #fff;
							}
							.m-signature-pad--footer {
								display: none;
							}
							.m-signature-pad--body {
								border: 1.5px dashed #d0d0d0;
								border-radius: 12px;
								background-color: #fff;
							}
							canvas {
								background-color: #fff !important;
							}
						`}
					/>
				</View>

				<TouchableOpacity
					style={[
						styles.saveButton,
						isEmpty && styles.saveButtonDisabled,
					]}
					onPress={handleSavePress}
					disabled={isEmpty}
					activeOpacity={0.8}
				>
					<Text style={styles.saveButtonText}>Зберегти підпис</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
}
