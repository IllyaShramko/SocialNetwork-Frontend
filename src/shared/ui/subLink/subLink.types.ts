import type { TouchableOpacityProps } from "react-native";

export interface SubLinkProps extends TouchableOpacityProps {
    text: string;
    active: boolean;
}