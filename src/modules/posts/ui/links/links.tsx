import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./links.styles";
import { LinksProps } from "./links.types";

export function Links({ links }: LinksProps) {
	return (
		<View style={styles.container}>
			{links.map((link) => (
				<TouchableOpacity key={link.id} onPress={() => Linking.openURL(link.url)}>
					<Text style={styles.link}>{link.title || link.url}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}