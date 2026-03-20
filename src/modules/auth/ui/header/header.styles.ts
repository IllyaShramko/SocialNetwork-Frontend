import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		backgroundColor: COLORS.white,
		paddingHorizontal: 16,
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 5,
		height: 56,
	},
	logo: {
		width: 145,
		height: 18,
	},
});
