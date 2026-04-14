import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.blue20,
		padding: 16,
		gap: 16,
	},
	focus: {
		borderColor: COLORS.plum,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	body: {
		gap: 24,
	},
	avatarContainer: {
		alignItems: "center",
		gap: 24,
	},
	avatarBlock: {},
	avatar: {
		width: 96,
		height: 96,
		borderRadius: 50,
		overflow: "hidden",
	},
	buttonsContainer: {
		flexDirection: "row",
		gap: 24,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	//
	textHeader: {
		fontSize: 16,
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
	},
	textAvatarHead: {
		fontSize: 16,
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
	},
	buttonText: {
		fontSize: 16,
		color: COLORS.plum,
		fontFamily: typography.medium.fontFamily,
	},
	username: {
		fontSize: 16,
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
		textAlign: "center",
	},
	surnameName: {
		fontSize: 24,
		color: COLORS.blue,
		fontFamily: typography.bold.fontFamily,
		textAlign: "center",
	},
});
