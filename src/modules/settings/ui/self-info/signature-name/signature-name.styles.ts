import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.blue20,
		padding: 16,
		gap: 16,
	},
	focus: {
		borderColor: COLORS.plum,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	body: {
		gap: 24,
	},
	internalContainer: {
		gap: 16,
		alignItems: "flex-start",
	},
	signatureNameContainer: {
		flexDirection: "row",
		gap: 8,
		opacity: 0.7,
	},
	signatureNameContainerEdit: {
		opacity: 1,
	},
	signatureContainer: {
		borderStyle: "dashed",
		borderColor: COLORS.blue50,
		borderRadius: 6,
		borderWidth: 0,
		width: "100%",
		alignItems: "center",
	},
	signatureContainerEdit: {
		padding: 7,
		borderWidth: 1,
	},
	signatureImage: {
		height: 70,
		width: 170,
		backgroundColor: "#fff",
	},
	//
	textHeader: {
		fontSize: 16,
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
	},
	signatureName: {
		fontSize: 16,
		color: COLORS.plum,
		fontFamily: typography.medium.fontFamily,
	},
	bodyText: {
		fontSize: 16,
		color: COLORS.blue,
		fontFamily: typography.regular.fontFamily,
	},
});
