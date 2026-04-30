import { Image } from "react-native";
import { styles } from "./photoItem.styles";
import { PhotoItemProps } from "./photoItem.types";

export function PhotoItem({ photo }: PhotoItemProps) {
	return <Image source={{ uri: photo.url }} style={styles.image} />;
}