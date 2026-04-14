import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	overlay: {
		flexGrow: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		paddingVertical: 40,
	},
	container: {
		gap: 24,
		padding: 16,
		backgroundColor: COLORS.white,
		borderRadius: 20,
	},
	welcomeText: {
		fontSize: 34,
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
		flexDirection: "row",
	},
	closeView: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	closeBtn: {},
});
