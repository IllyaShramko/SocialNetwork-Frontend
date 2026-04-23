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
	addImageButton: {
		borderWidth: 1,
		borderColor: COLORS.blue50,
		borderRadius: 10,
		borderStyle: "dashed",
		alignItems: "center",
		justifyContent: "center",
		width: 160,
		height: 160,
	},
	imageAlbumContainer: {},
	threePoint: {
		zIndex: 10,
	},
	modalEditAlbum: {
		zIndex: 9,
		position: "absolute",
		right: -5,
		top: 0,
		backgroundColor: COLORS.plum50,
		padding: 16,
		gap: 16,
		borderRadius: 10,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	body: {
		gap: 16,
		flexWrap: "wrap",
		flexDirection: "row",
	},
	//
	textHeader: {
		fontSize: 16,
		color: COLORS.blue,
		fontFamily: typography.medium.fontFamily,
	},
	buttonText: {
		fontSize: 16,
		color: COLORS.plum,
		fontFamily: typography.medium.fontFamily,
	},
});
