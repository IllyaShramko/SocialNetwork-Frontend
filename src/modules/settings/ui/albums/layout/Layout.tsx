import { View } from "react-native";
import { styles } from "./layout.styles";
import { HeadCard } from "../main/card/Card";

export function CardsAlbum() {
	return (
		<View style={styles.container}>
			<HeadCard />
		</View>
	);
}
