import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: 162,
		height: 162,
		borderRadius: 10,
		overflow: "hidden",
	},
	image: {
		width: 162,
		height: 162,
	},
	actions: {
		position: "absolute",
		bottom: 10,
		right: 10,
		zIndex: 1,
		flexDirection: "row",
		gap: 10
	},
	loader: {
		position: "absolute",
		backgroundColor: COLORS.fog,
		justifyContent: "center",
		alignItems: "center",
		zIndex: 2,
		width: "100%",
		height: "100%",
	},
});
