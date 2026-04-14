import { COLORS } from "@shared/constants/colors";
import { View, Text } from "react-native";

export default function Page() {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<Text>Рекомендації</Text>
		</View>
	);
}
