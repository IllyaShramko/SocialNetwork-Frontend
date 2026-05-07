import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		backgroundColor: COLORS.white,
		borderRadius: 28,
		borderWidth: 1,
		borderColor: COLORS.white,
		paddingVertical: 32,
		paddingHorizontal: 24,
	},

	avatarWrapper: {
		position: "relative",
	},

	avatar: {
		width: 110,
		height: 110,
		borderRadius: 999,
	},

	status: {
		position: "absolute",
		right: 4,
		bottom: 4,
		width: 24,
		height: 24,
		borderRadius: 999,
		backgroundColor: COLORS.white,
		borderWidth: 2,
		borderColor: COLORS.white,
	},

	username: {
		marginTop: 20,
		fontSize: 36,
		fontWeight: "700",
		color: COLORS.white,
	},

	nickname: {
		marginTop: 8,
		fontSize: 24,
		color: COLORS.plum,
	},

	actions: {
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
});