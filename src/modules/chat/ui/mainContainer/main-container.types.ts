import { ReactNode } from "react";
import { ListRenderItem } from "react-native";

export interface MainContainerProps<T extends { id: number }> {
	icon: ReactNode;
	name: string;
	data?: T[];
	isLoading: boolean;
	renderItem: ListRenderItem<T>;
	onSearch: (text: string) => void;
}
