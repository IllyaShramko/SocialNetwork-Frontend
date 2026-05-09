import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {},
	headerContainer: {
		padding: 16,
		gap: 16,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.blue20,
	},
	profilePreview: {
		width: "100%",
		alignItems: "center",
		gap: 24,
	},
	textsInfo: {
		width: "100%",
		alignItems: "center",
		gap: 10,
	},
	stats: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	btns: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 16,
	},
	backButtonPlaceholder: {
		width: 20,
		height: 20,
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
	statContainer: {
		alignItems: "center",
		flexGrow: 1,
		gap: 7,
	},
	stat: {
		color: COLORS.blue,
		fontFamily: typography.bold.fontFamily,
		fontSize: 20,
	},
	description: {
		color: COLORS.blue50,
		fontFamily: typography.medium.fontFamily,
		fontSize: 16,
	},
	hr: {
		height: 48,
		width: 1,
		backgroundColor: COLORS.blue20,
	},
});
