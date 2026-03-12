import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 5
    },
    link: {
        gap: 6,
        padding: 8,
        paddingBottom: 4,
        alignItems: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
        color: COLORS.blue
    },
    selected: {
        borderTopWidth: 1,
        borderTopColor: COLORS.plum
    }
})
 
