import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		gap: 10,
		flexDirection: "row"
	},
	text: {
		fontFamily: typography.medium.fontFamily,
		fontSize: 16,
		color: COLORS.blue,
	},
});
