import { SubLink } from "@shared/ui";
import { View } from "react-native";
import { styles } from "./subHeader.styles"
import { usePathname, useRouter } from "expo-router";
import { PropsWithChildren } from "react";


export function SubHeader({ children }: PropsWithChildren) {
    return (
        <View style={styles.header}>
            {children}
        </View>
    )
}