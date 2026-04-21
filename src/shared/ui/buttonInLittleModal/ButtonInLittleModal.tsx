import { Text, TouchableOpacity, View } from "react-native";
import { LittleButtonProps } from "./button.types";
import { styles } from "./button.styles";
import { Icons } from "../icons";

export function LittleButton(props: LittleButtonProps) {
	const { iconLeft, text, style, textStyle, ...restProps } = props;

    return (
        <TouchableOpacity
            style={[styles.button, style]}
            {...restProps}
        >   
            {iconLeft}
            <Text style={[styles.text, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
