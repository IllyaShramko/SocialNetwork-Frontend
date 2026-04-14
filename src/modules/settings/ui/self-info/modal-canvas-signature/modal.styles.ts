import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const CANVAS_WIDTH = width - 40;
const CANVAS_HEIGHT = CANVAS_WIDTH * (9 / 16);

export const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: "#fafafa",
		paddingHorizontal: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 16,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#e0e0e0",
	},
	headerBtn: {
		minWidth: 72,
	},
	title: {
		fontSize: 17,
		fontWeight: "600",
		color: "#1a1a2e",
	},
	cancelText: {
		fontSize: 15,
		color: "#888",
	},
	clearText: {
		fontSize: 15,
		color: "#e05c5c",
		textAlign: "right",
	},
	hint: {
		fontSize: 13,
		color: "#aaa",
		textAlign: "center",
		marginTop: 16,
		marginBottom: 8,
	},
	canvasWrapper: {
		width: "100%",
		height: CANVAS_HEIGHT,
		borderRadius: 14,
		overflow: "hidden",
		backgroundColor: "#fff",
		marginVertical: 12,
		borderWidth: 1,
		borderColor: "#e8e8e8",
		alignSelf: "center",
	},
	saveButton: {
		backgroundColor: "#1a1a2e",
		borderRadius: 14,
		paddingVertical: 16,
		alignItems: "center",
		marginBottom: 12,
	},
	saveButtonDisabled: {
		backgroundColor: "#c8c8c8",
	},
	saveButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},

	triggerButton: {
		borderWidth: 1.5,
		borderColor: "#1a1a2e",
		borderStyle: "dashed",
		borderRadius: 12,
		paddingVertical: 18,
		alignItems: "center",
	},
	triggerText: {
		fontSize: 15,
		color: "#1a1a2e",
		fontWeight: "500",
	},
	signaturePreviewBox: {
		borderWidth: 1,
		borderColor: "#34c777",
		borderRadius: 12,
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: "#f0fff6",
	},
	previewLabel: {
		fontSize: 14,
		color: "#2a8a50",
		fontWeight: "500",
		textAlign: "center",
	},
	errorText: {
		fontSize: 12,
		color: "#e05c5c",
		marginTop: 6,
		marginLeft: 4,
	},
});
