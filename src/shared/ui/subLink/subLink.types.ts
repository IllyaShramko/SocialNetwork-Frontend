import type { TextStyle, TouchableOpacityProps } from "react-native";

export interface SubLinkProps extends TouchableOpacityProps {
	text: string;
	active: boolean;
	textStyle?: TextStyle
}
