import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	modalCard: {
		width: "100%",
		backgroundColor: COLORS.white,
		borderRadius: 20,
		padding: 24,
        gap: 16,
		elevation: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.2,
		shadowRadius: 15,
	},
	title: {
		fontSize: 24,
        fontFamily: typography.medium.fontFamily,
		textAlign: "center",
		marginTop: 10,
        color: COLORS.blue
	},
	inputGap: {
		gap: 16,
		width: "100%",
	},
	hint: {
		fontSize: 12,
		color: COLORS.blue,
        fontFamily: typography.regular.fontFamily,
	},
	highlight: {
		color: COLORS.green,
	},
	footer: {
		width: "100%",
		alignItems: "flex-end",
		marginTop: 12,
	},
	button: {
		width: 160,
		height: 52,
		borderRadius: 26,
		backgroundColor: COLORS.plum,
		justifyContent: "center",
		alignItems: "center",
	},
});