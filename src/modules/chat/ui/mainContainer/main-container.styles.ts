import { COLORS } from "@shared/constants/colors";
import { typography } from "@shared/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		gap: 24,
		paddingVertical: 16,
		borderWidth: 1,
		borderColor: COLORS.blue20,
		borderRadius: 10,
		backgroundColor: COLORS.white,
	},
	header: {
		flexDirection: "row",
		paddingHorizontal: 16,
		gap: 8,
        alignItems: "center"
	},
	searchContainer: {
		paddingHorizontal: 16,
	},
	headerText: {
		fontFamily: typography.medium.fontFamily,
		color: COLORS.blue50,
		fontSize: 20,
	},
});
