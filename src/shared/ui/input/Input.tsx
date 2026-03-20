import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./input.styles";
import { InputPasswordProps, InputProps } from "./input.types";
import { useState } from "react";
import { Icons } from "../icons";
import { COLORS } from "@shared/constants/colors";

export function Input(props: InputProps) {
	const {
		label,
		iconLeft,
		iconRight,
		accessable,
		error,
		inputContainerStyle,
		onBlur,
		onFocus,
		...restProps
	} = props;
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<View style={[styles.container, inputContainerStyle]}>
			{label && (
				<View>
					<Text
						style={[
							styles.label,
							!accessable && styles.labelNotAllowed,
						]}
					>
						{label}
					</Text>
				</View>
			)}
			<View
				style={[
					styles.inputContainer,
					!isActive && styles.inputNotActive,
					!accessable && styles.inputNotAllowed,
				]}
			>
				{iconLeft}
				<TextInput
					style={[styles.input, error && styles.inputError]}
					onFocus={(e) => {
						setIsActive(true);
						if (onFocus) onFocus(e);
					}}
					onBlur={(e) => {
						setIsActive(false);
						if (onBlur) onBlur(e);
					}}
					{...restProps}
				/>
				{iconRight}
			</View>
			{error && (
				<View>
					<Text style={styles.error}>{error}</Text>
				</View>
			)}
		</View>
	);
}

function Password(props: InputPasswordProps) {
	const [isHidden, setIsHidden] = useState<boolean>(true);

	const EyeIcon = isHidden ? (
		<Icons.EyeClosedIcon width={20} height={20} viewBox="0 0 20 20" />
	) : (
		<Icons.EyeOpenedIcon width={20} height={15} viewBox="0 0 20 15" />
	);

	function toggleVisibility() {
		setIsHidden(!isHidden);
	}
	return (
		<Input
			{...props}
			iconRight={
				<TouchableOpacity
					style={{ alignContent: "center", padding: 5 }}
					onPress={toggleVisibility}
				>
					{EyeIcon}
				</TouchableOpacity>
			}
			secureTextEntry={isHidden}
		/>
	);
}
Input.Password = Password;
