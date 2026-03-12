import { ReactNode } from "react";
import type { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
    text?: string;
    variant: "fill" | "outline";
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
    buttonStyle?: ViewStyle;
}