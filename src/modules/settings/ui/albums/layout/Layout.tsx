import { View } from "react-native";
import { styles } from "./layout.styles";
import { MainCard } from "../main";
import { HeadCard } from "../head/card/Card";

export function CardsAlbum() {
	return (
		<View style={styles.container}>
			<HeadCard />
			<MainCard />
		</View>
	);
}
