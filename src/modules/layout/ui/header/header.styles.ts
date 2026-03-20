import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		backgroundColor: COLORS.white,
		paddingHorizontal: 16,
		paddingVertical: 8,
		justifyContent: "space-between",
		alignItems: "center",
		zIndex: 5,
	},
	blockButtons: {
		flexDirection: "row",
		gap: 10,
	},
	icon: {},
	logo: {
		width: 145,
		height: 18,
	},
});
