import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		gap: 6,
		alignItems: "flex-start",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		paddingHorizontal: 14,
		height: 42,
		width: "100%",
		borderWidth: 1,
		borderColor: COLORS.blue,
		borderRadius: 10,
	},
	inputNotActive: {
		borderColor: COLORS.blue20,
	},
	labelNotAllowed: {
		color: COLORS.blue50,
	},
	label: {
		fontSize: 16,
		fontFamily: typography.regular.fontFamily,
		color: COLORS.blue,
	},
	input: {
		flex: 1,
		fontSize: 16,
		fontFamily: typography.regular.fontFamily,
		color: COLORS.blue,
	},
	inputNotAllowed: {
		borderColor: COLORS.blue50,
	},
	inputError: {
		borderColor: COLORS.red,
	},
	error: {
		fontSize: 12,
		fontFamily: typography.regular.fontFamily,
		color: COLORS.red,
	},
});
