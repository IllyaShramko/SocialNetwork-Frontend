import { ReactNode, Ref } from "react";
import { TextInputProps, ViewStyle, TextInput } from "react-native";

export interface InputProps extends TextInputProps {
	label?: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	accessable: boolean;
	error?: string;
	inputContainerStyle?: ViewStyle;
}

export type InputPasswordProps = Omit<InputProps, "iconRight">;

export interface InputCodeNumberProps extends TextInputProps {
	accessable: boolean;
	isError?: boolean;
	ref?: Ref<TextInput>;
	onNextField?: () => void;
	onBackspace?: () => void;
}
