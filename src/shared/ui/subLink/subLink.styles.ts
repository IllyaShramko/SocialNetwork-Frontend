import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	subLink: {
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		height: 26,
	},
	text: {
		fontFamily: typography.medium.fontFamily,
		fontSize: FONT_SIZE.smallTitle,
		color: COLORS.blue,
	},
	disabledText: {
		color: COLORS.blue50,
	},
	disabled: {},
	bottomBorder: {
		height: 2,
		width: "100%",
		backgroundColor: COLORS.plum,
	},
	disabledBorder: {
		height: 0,
		backgroundColor: "none",
	},
});
