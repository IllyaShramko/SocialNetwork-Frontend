import { TouchableOpacity, Text } from "react-native";
import { styles } from "./tag.styles";
import { TagProps } from "./tag.types";

export const Tag = (props: TagProps) => {
	const { tag, isSelected, onPress } = props;
	return (
		<TouchableOpacity
			style={[
				styles.tag,
				isSelected ? styles.tagSelected : styles.tagUnselected,
			]}
			onPress={() => onPress(tag.id)}
		>
			<Text
				style={[
					styles.tagText,
					isSelected
						? styles.tagTextSelected
						: styles.tagTextUnselected,
				]}
			>
				#{tag.name}
			</Text>
		</TouchableOpacity>
	);
};
