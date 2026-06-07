import { StyleSheet } from "react-native";
import { COLORS } from "@shared/constants/colors";

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.4)",
		justifyContent: "center",
		alignItems: "center",
	},

	container: {
		width: "90%",
		backgroundColor: COLORS.white,
		borderRadius: 16,
		padding: 20,
	},

	closeButton: {
		alignSelf: "flex-end",
		padding: 4,
	},

	closeText: {
		fontSize: 18,
		color: COLORS.blue,
	},

	title: {
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
		color: COLORS.blue,
		marginBottom: 20,
	},

	input: {
		height: 44,
		borderWidth: 1,
		borderColor: COLORS.blue20,
		borderRadius: 10,
		paddingHorizontal: 12,
		marginBottom: 12,
		color: COLORS.blue,
		backgroundColor: COLORS.white,
	},

	selectedText: {
		color: COLORS.blue50,
		marginBottom: 12,
		fontSize: 12,
	},

	userRow: {
		height: 52,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: COLORS.blue10,
		paddingHorizontal: 4,
	},

	avatarBlock: {
		height: 120,
		borderWidth: 1,
		borderColor: COLORS.blue20,
		borderStyle: "dashed",
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 12,
	},

	footer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 24,
		gap: 12,
	},
});