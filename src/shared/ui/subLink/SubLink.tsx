import { Text, TouchableOpacity, View } from "react-native";
import { SubLinkProps } from "./subLink.types";
import { styles } from "./subLink.styles";

export function SubLink(props: SubLinkProps) {
	const { text, active, style, textStyle, ...restProps } = props;

	return (
		<TouchableOpacity
			style={[styles.subLink, style, !active && styles.disabled]}
			{...restProps}
		>
			<Text style={[styles.text, textStyle, !active && styles.disabledText]}>
				{text}
			</Text>
			<View
				style={[styles.bottomBorder, !active && styles.disabledBorder]}
			></View>
		</TouchableOpacity>
	);
}
