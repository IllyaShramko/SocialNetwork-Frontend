import { ReactNode } from "react";
import type { TouchableOpacityProps } from "react-native";

export interface LinkProps extends TouchableOpacityProps {
	text: string;
	icon: ReactNode;
	selected: boolean;
}
