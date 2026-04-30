import { View } from "react-native";
import { styles } from "./photosContainer.styles";
import { PhotosContainerProps } from "./photosContainer.types";
import { PhotoItem } from "../photoItem";

export function PhotosContainer({ photos }: PhotosContainerProps) {
	return (
		<View style={styles.container}>
			{photos.map((photo) => (
				<PhotoItem key={photo.id} photo={photo} />
			))}
		</View>
	);
}