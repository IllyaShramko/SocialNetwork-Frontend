import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	tag: {
		padding: 6,
		borderRadius: 6,
		borderWidth: 1,
	},
	tagSelected: {
		backgroundColor: COLORS.plum,
		borderColor: COLORS.plum,
	},
	tagUnselected: {
		backgroundColor: COLORS.plum50,
		borderColor: "transparent",
	},
	tagText: {
		fontSize: 14,
		fontFamily: typography.regular.fontFamily,
	},
	tagTextSelected: {
		color: COLORS.white,
	},
	tagTextUnselected: {
		color: COLORS.plum,
	},
});
