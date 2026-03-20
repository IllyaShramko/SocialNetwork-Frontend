import { ReactNode } from "react";
import { TextInputProps, ViewStyle } from "react-native";

export interface InputProps extends TextInputProps {
	label?: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	accessable: Boolean;
	error?: string;
	inputContainerStyle?: ViewStyle;
}

export type InputPasswordProps = Omit<InputProps, "iconRight">;
