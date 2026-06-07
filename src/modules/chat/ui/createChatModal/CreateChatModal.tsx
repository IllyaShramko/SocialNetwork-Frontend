import React, { useState } from "react";
import {
	Modal,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";

import { Button } from "@shared/ui/button";
import { styles } from "./create-chat-modal.styles";

type CreateChatModalProps = {
	visible: boolean;
	onClose: () => void;
};

export function CreateChatModal({
	visible,
	onClose,
}: CreateChatModalProps) {
	const [step, setStep] = useState<1 | 2>(1);

	const [participants, setParticipants] = useState<string[]>([]);
	const [name, setName] = useState("");
	const [avatar, setAvatar] = useState<any>(null);

	const users = [
		{ id: "1", name: "Aeslie Alexander" },
		{ id: "2", name: "Aug Hawkins" },
		{ id: "3", name: "Acob Jones" },
	];

	const toggleUser = (id: string) => {
		setParticipants((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id]
		);
	};

	const handleCreate = () => {
		console.log({
			participants,
			name,
			avatar,
		});

		onClose();
	};

	return (
		<Modal
			visible={visible}
			transparent
			animationType="fade"
			onRequestClose={onClose}
		>
			<View style={styles.overlay}>
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={onClose}
					>
						<Text style={styles.closeText}>✕</Text>
					</TouchableOpacity>

					{step === 1 ? (
						<>
							<Text style={styles.title}>
								Нова група
							</Text>

							<TextInput
								style={styles.input}
								placeholder="Пошук"
							/>

							<Text style={styles.selectedText}>
								Вибрано: {participants.length}
							</Text>

							{users.map((user) => (
								<TouchableOpacity
									key={user.id}
									style={styles.userRow}
									onPress={() =>
										toggleUser(user.id)
									}
								>
									<Text>{user.name}</Text>

									<Text>
										{participants.includes(
											user.id
										)
											? "☑"
											: "☐"}
									</Text>
								</TouchableOpacity>
							))}

							<View style={styles.footer}>
								<Button
									text="Скасувати"
									variant="outline"
									onPress={onClose}
								/>

								<Button
									text="Далі"
									variant="fill"
									onPress={() =>
										setStep(2)
									}
								/>
							</View>
						</>
					) : (
						<>
							<Text style={styles.title}>
								Нова група
							</Text>

							<TextInput
								style={styles.input}
								value={name}
								onChangeText={setName}
								placeholder="Назва групи"
							/>

							<TouchableOpacity
								style={styles.avatarBlock}
								onPress={() =>
									console.log(
										"select avatar"
									)
								}
							>
								<Text>
									Обрати аватар
								</Text>
							</TouchableOpacity>

							<View style={styles.footer}>
								<Button
									text="Назад"
									variant="outline"
									onPress={() =>
										setStep(1)
									}
								/>

								<Button
									text="Створити"
									variant="fill"
									onPress={handleCreate}
								/>
							</View>
						</>
					)}
				</View>
			</View>
		</Modal>
	);
}