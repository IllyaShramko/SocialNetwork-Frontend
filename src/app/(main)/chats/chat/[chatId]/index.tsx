import { COLORS } from "@shared/constants/colors";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
	const { chatId } = useLocalSearchParams<{ chatId: string }>();

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<Text>Hello hello chat with id {chatId}</Text>
		</View>
	);
}
