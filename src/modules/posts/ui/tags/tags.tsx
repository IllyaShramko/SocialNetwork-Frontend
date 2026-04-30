import { Text, View } from "react-native";
import { styles } from "./tags.styles";
import { TagsProps } from "./tags.types";

export function Tags({ tags }: TagsProps) {
	return (
		<View style={styles.container}>
			{tags.map((tag) => (
				<View key={tag.id} style={styles.tag}>
					<Text style={styles.tagText}>#{tag.name}</Text>
				</View>
			))}
		</View>
	);
}