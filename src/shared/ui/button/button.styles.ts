import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    button: {
		flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
		minHeight: 40,
		minWidth: 40,
        borderRadius: 45,
        padding: 10,
    },
    buttonWithPaddings: {
        paddingHorizontal: 16,
    },
    fill: {
        backgroundColor: COLORS.plum,
        borderWidth: 0
    },
    outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderRightColor: COLORS.plum,
    },
    text: {
        fontSize: 14,
    },
    textFill: {
        color: COLORS.white
    },
    textOutline: {
        color: COLORS.plum
    },
    disabled: {
        opacity: 0.8
    }
})