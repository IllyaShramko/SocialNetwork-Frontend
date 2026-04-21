import { ReactNode } from "react";
import type { TextStyle, TouchableOpacityProps } from "react-native";

export interface LittleButtonProps extends TouchableOpacityProps {
	iconLeft: ReactNode;
	text: string;
	textStyle?: TextStyle;
}
