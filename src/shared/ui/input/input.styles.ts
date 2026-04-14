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
		borderColor: COLORS.blue50,
	},
	textNotAllowed: {
		color: COLORS.blue50
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
		borderColor: COLORS.blue20,
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

export const stylesInputCodeNumber = StyleSheet.create({
	inputContainer: {
		width: 40,
		height: 40,
		paddingHorizontal: 0,
		justifyContent: "center",
		borderWidth: 1,
		borderRadius: 10,
	},
	input: {
		textAlign: "center",
		width: "100%",
		fontSize: 16,
		fontFamily: typography.regular.fontFamily,
		color: COLORS.blue,
	},
	inputNotActive: {
		borderColor: COLORS.blue20,
	},
	inputNotAllowed: {
		borderColor: COLORS.blue50,
	},
	inputError: {
		borderColor: COLORS.red,
	},
});