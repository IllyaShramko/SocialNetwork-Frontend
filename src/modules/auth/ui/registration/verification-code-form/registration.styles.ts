import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		gap: 24,
		paddingHorizontal: 16,
		paddingVertical: 44,
		backgroundColor: COLORS.white,
		borderRadius: 20,
	},
	nav: {
		flexDirection: "row",
		paddingHorizontal: 16,
		gap: 24,
		alignItems: "center",
		justifyContent: "center",
	},
	navText: {
		fontSize: 24,
		fontFamily: typography.bold.fontFamily,
	},
	welcomeText: {
		fontSize: 24,
		fontFamily: typography.medium.fontFamily,
		textAlign: "center",
	},
	inputs: {
		justifyContent: "space-between",
		flexDirection: "row",
	},
	internalInputs: {
		flexDirection: "row",
		gap: 8,
	},
	descriptionText: {
		fontSize: 14,
		fontFamily: typography.medium.fontFamily,
		textAlign: "center",
		color: COLORS.blue,
	},
	backText: {
		fontSize: 16,
		fontFamily: typography.medium.fontFamily,
		color: COLORS.plum,
	},
	errorText: {
		fontSize: 12,
		fontFamily: typography.regular.fontFamily,
		color: COLORS.red,
		marginTop: 4,
	},
	label: {
		fontSize: 14,
		fontFamily: typography.medium.fontFamily,
		color: COLORS.blue,
		marginBottom: 8,
	},
	buttonsContainer: {
		gap: 12,
	},
});
