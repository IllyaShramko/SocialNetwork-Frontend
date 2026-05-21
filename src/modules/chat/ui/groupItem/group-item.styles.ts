import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: COLORS.white,
		flexDirection: "row",
		gap: 12,
	},
	unreadedContainer: {
		backgroundColor: COLORS.plum50,
	},
	avatarContainer: {
		width: 46,
		height: 46,
		borderRadius: "50%",
		overflow: "hidden",
	},
	avatar: {
		width: 46,
		height: 46,
	},
	info: {
		gap: 4,
		flex: 1
	},
	head: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	nameChat: {
		fontFamily: typography.medium.fontFamily,
		color: COLORS.blue,
		fontSize: 16,
	},
	lastMessageTime: {
		fontFamily: typography.medium.fontFamily,
		color: COLORS.blue50,
		fontSize: 14,
	},
	lastMessageText: {
		fontFamily: typography.regular.fontFamily,
		color: COLORS.blue,
		fontSize: 14,
	},
});
