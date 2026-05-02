import { FirstEnterModal } from "@modules/auth/ui/modal-first-enter";
import { PostList } from "@modules/posts";
import { COLORS } from "@shared/constants/colors";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Modal } from "react-native";

export default function Page() {
	const { isNewUser } = useLocalSearchParams<{ isNewUser?: string }>();
	const [isWelcomeVisible, setIsWelcomeVisible] = useState<boolean>(
		isNewUser === "true",
	);
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<PostList />
			<FirstEnterModal
				isVisible={isWelcomeVisible}
				onClose={() => setIsWelcomeVisible(false)}
			/>
		</View>
	);
}
