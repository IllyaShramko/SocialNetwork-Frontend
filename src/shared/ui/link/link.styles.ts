import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	link: {
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		padding: 8,
		paddingBottom: 4,
		borderTopColor: COLORS.plum,
		borderTopWidth: 2,
	},
	disabled: {
		borderTopWidth: 0,
	},
	iconContainer: {
		height: 20,
		width: 20,
	},
	text: {
		fontFamily: typography.medium.fontFamily,
		fontSize: FONT_SIZE.defaultP,
		color: COLORS.blue,
	},
});
