import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		padding: 16,
		gap: 16,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.blue20,
	},
	header: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerText: {
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
		fontSize: 16,
	},
	btnText: {
		color: COLORS.plum,
		fontFamily: typography.medium.fontFamily,
		fontSize: 16,
	},
	body: {
		gap: 8,
	},
	btns: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 16,
	},
	placeholderText: {
		fontSize: 16,
		textAlign: "center",
		fontFamily: typography.medium.fontFamily,
	},
});
