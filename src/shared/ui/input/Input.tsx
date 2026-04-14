import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles, stylesInputCodeNumber } from "./input.styles";
import {
	InputCodeNumberProps,
	InputPasswordProps,
	InputProps,
} from "./input.types";
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
					error && styles.inputError,
				]}
			>
				{iconLeft}
				<TextInput
					style={[styles.input, !accessable && styles.textNotAllowed]}
					onFocus={(e) => {
						setIsActive(true);
						if (onFocus) onFocus(e);
					}}
					onBlur={(e) => {
						setIsActive(false);
						if (onBlur) onBlur(e);
					}}
					editable={accessable}
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

function CodeNumber(props: InputCodeNumberProps) {
	const {
		accessable,
		isError,
		onBlur,
		onFocus,
		onNextField,
		onBackspace,
		onChangeText,
		...restProps
	} = props;
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleChangeText = (value: string) => {
		if (onChangeText) {
			onChangeText(value);
		}
		if (value.length === 1 && onNextField) {
			onNextField();
		}
	};

	const handleKeyPress = ({
		nativeEvent,
	}: {
		nativeEvent: { key: string };
	}) => {
		if (nativeEvent.key === "Backspace" && onBackspace) {
			onBackspace();
		}
	};

	return (
		<View
			style={[
				styles.container,
				stylesInputCodeNumber.inputContainer,
				!isActive && styles.inputNotActive,
				!accessable && styles.inputNotAllowed,
				isError && styles.inputError,
			]}
		>
			<TextInput
				{...restProps}
				style={stylesInputCodeNumber.input}
				onFocus={(e) => {
					setIsActive(true);
					if (onFocus) onFocus(e);
				}}
				onBlur={(e) => {
					setIsActive(false);
					if (onBlur) onBlur(e);
				}}
				editable={accessable}
				onKeyPress={handleKeyPress}
				onChangeText={handleChangeText}
				maxLength={1}
			/>
		</View>
	);
}

Input.CodeNumber = CodeNumber;
