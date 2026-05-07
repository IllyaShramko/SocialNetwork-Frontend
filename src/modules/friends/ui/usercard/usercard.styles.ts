import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 28,
		borderWidth: 1,
		borderColor: "#E5E7EB",
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
		backgroundColor: "#D4D4D8",
		borderWidth: 2,
		borderColor: "#FFFFFF",
	},

	username: {
		marginTop: 20,
		fontSize: 36,
		fontWeight: "700",
		color: "#0F172A",
	},

	nickname: {
		marginTop: 8,
		fontSize: 24,
		color: "#737373",
	},

	actions: {
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
});