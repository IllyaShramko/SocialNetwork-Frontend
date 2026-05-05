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
		paddingHorizontal: 20,
	},
	modalCard: {
		width: "100%",
		maxWidth: 400,
		gap: 24,
		padding: 24,
		backgroundColor: COLORS.white,
		borderRadius: 24,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 5,
	},
	header: {
		flexDirection: "row-reverse",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerText: {
		fontFamily: typography.medium.fontFamily,
		fontSize: 24,
		color: COLORS.blue,
		flex: 1,
	},
	body: {
		gap: 16,
	},
	dropdown: {
		height: 42,
		borderColor: COLORS.blue50,
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 12,
	},
	selectView: {
		gap: 6,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "flex-end",
		gap: 12,
	},
	placeholder: {
		fontFamily: typography.regular.fontFamily,
		fontSize: 16,
		color: COLORS.blue50,
	},
	selectedText: {
		fontFamily: typography.regular.fontFamily,
		fontSize: 16,
		color: COLORS.blue,
	},
	inputSearch: {
		fontFamily: typography.regular.fontFamily,
		fontSize: 16,
		color: COLORS.blue,
		borderRadius: 8,
	},
});
