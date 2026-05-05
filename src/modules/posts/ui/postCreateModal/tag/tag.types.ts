import { Tag } from "@shared/api/types";

export interface TagProps {
	tag: Tag;
	isSelected: boolean;
	onPress: (id: number) => void;
}
