import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLORS.plum50
    },
    child: {
        gap: 8,
        paddingBottom: 8
    }
})