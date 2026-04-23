import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		minHeight: 40,
		minWidth: 40,
		borderRadius: 45,
		padding: 10,
	},
	buttonWithPaddings: {
		paddingHorizontal: 16,
	},
	fill: {
		backgroundColor: COLORS.plum,
		borderWidth: 0,
	},
	outline: {
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderRightColor: COLORS.plum,
	},
	text: {
		fontFamily: typography.medium.fontFamily,
		fontSize: FONT_SIZE.defaultP,
	},
	textFill: {
		color: COLORS.white,
	},
	textOutline: {
		color: COLORS.plum,
	},
	disabled: {
		opacity: 0.8,
	},
});
