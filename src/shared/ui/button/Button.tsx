import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./button.types";
import { styles } from "./button.styles";

export function Button(props: ButtonProps) {
	const {
		text,
		variant,
		iconLeft,
		iconRight,
		buttonStyle,
		disabled,
		style,
		...restProps
	} = props;

	return (
		<TouchableOpacity
			style={[
				styles.button,
				styles[variant],
				text && styles.buttonWithPaddings,
				style,
				disabled && styles.disabled,
			]}
			{...restProps}
		>
			{iconLeft}
			{text && (
				<Text
					style={[
						styles.text,
						variant === "fill"
							? styles.textFill
							: styles.textOutline,
					]}
				>
					{text}
				</Text>
			)}
			{iconRight}
		</TouchableOpacity>
	);
}
