import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 20,
	},
	modal: {
		width: "100%",
		gap: 24,
		paddingTop: 24,
		paddingHorizontal: 16,
		paddingBottom: 44,
		backgroundColor: COLORS.white,
		borderRadius: 24,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 5,
	},
	header: {},
	closeBtn: {
		width: 20,
		height: 20,
	},
	tags: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "flex-start",
		gap: 10,
	},
	plusButton: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: COLORS.plum,
		borderRadius: 20,
	},
	body: {
		width: "100%",
		gap: 16,
		paddingHorizontal: 14,
	},
	headerText: {
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
		fontSize: 24,
	},
	textArea: {
		minHeight: 140,
	},
	links: {
		gap: 6,
	},
	textLabel: {
		fontFamily: typography.regular.fontFamily,
		fontSize: 16,
		color: COLORS.blue,
	},
	inputWrapper: {
		flexDirection: "row",
		gap: 12,
	},
	imageGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
		marginTop: 10,
	},
	imageWrapper: {
		width: "100%",
		height: 200,
		position: "relative",
	},
	previewImage: {
		width: "100%",
		height: "100%",
		borderRadius: 8,
	},
	deleteBadge: {
		position: "absolute",
		top: 10,
		right: 10,
	},
	errorText: {
		color: "red",
		fontSize: 12,
		marginTop: 4,
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		gap: 10,
	},
});
