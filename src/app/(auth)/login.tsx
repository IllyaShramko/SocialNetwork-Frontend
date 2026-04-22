import { LoginForm } from "@modules/auth";
import { COLORS } from "@shared/constants/colors";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
	return (
		<View style={{ backgroundColor: COLORS.plum50, flex: 1, alignItems: "center"}}>
			<LoginForm />
		</View>
	);
}
