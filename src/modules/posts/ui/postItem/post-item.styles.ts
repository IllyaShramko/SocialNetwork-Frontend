import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderColor: COLORS.blue20,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: COLORS.white,
		overflow: "hidden",
	},
	header: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.blue20,
	},
	head: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	avatarContainer: {
		width: 46,
		height: 46,
		borderRadius: "50%",
		overflow: "hidden",
	},
	avatar: {
		flex: 1,
	},
	username: {
		fontFamily: typography.medium.fontFamily,
		color: COLORS.blue,
		fontSize: 14,
	},
	body: {
		padding: 16,
		gap: 16,
	},
	texts: {
		gap: 6,
	},
	topic: {
		fontSize: 16,
		fontFamily: typography.medium.fontFamily,
		color: COLORS.blue,
	},
	description: {
		fontSize: 14,
		fontFamily: typography.regular.fontFamily,
		color: COLORS.blue,
	},
	tags: {
		fontSize: 14,
		fontFamily: typography.regular.fontFamily,
		color: COLORS.plum,
	},
	lineOfImages: {
		height: 203,
		gap: 8,
		flexDirection: "row",
	},
	images: {
		gap: 8,
	},
	footer: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 16
	},
	containerBtn: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	textBtn: {
		fontFamily: typography.regular.fontFamily,
		fontSize: 14,
		color: COLORS.blue,
	},
});
