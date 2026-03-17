import { Text, TouchableOpacity, View } from "react-native";
import { LinkProps } from "./link.types";
import { styles } from "./link.styles";

export function Link(props: LinkProps) {
    const {text, selected, style, icon, ...restProps} = props

    return (
        <TouchableOpacity style= {[styles.link, style, !selected && styles.disabled]} {...restProps}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>    
    )
}