import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.blue20,
        gap: 16,
        paddingVertical: 16
    },
	body: {
		width: "100%",
		alignItems: "center",
		gap: 24,
	},
	avatar: {
		width: 96,
		height: 96,
	},
	avatarImg: {
		width: 96,
        height: 96,
		borderRadius: 50,
		overflow: "hidden",
	},
	indicator: {
		position: "absolute",
		right: 8,
		bottom: 8,
		height: 18,
		width: 18,
		borderRadius: "50%",
		borderColor: COLORS.white,
		borderWidth: 2.25,
	},
	inactive: {
		backgroundColor: COLORS.blue20,
	},
	active: {
		backgroundColor: COLORS.green,
	},
	textsInfo: {
		width: "100%",
		alignItems: "center",
		gap: 10,
	},
	pseudonym: {
		color: COLORS.blue,
		fontFamily: typography.bold.fontFamily,
		fontSize: 24,
	},
	username: {
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
		fontSize: 16,
	},
});
