import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { ImageItemProps } from "./image-item.types";
import { styles } from "./image-item.styles";
import { Image } from "expo-image";
import { Icons } from "@shared/ui/icons";
import { COLORS } from "@shared/constants/colors";
import { Button } from "@shared/ui/button";

export function ImageItem(props: ImageItemProps) {
	const { uri, isLoading, id, onDelete, onChangeVisibility } = props;
	return (
		<View style={styles.container}>
			<Image source={{ uri }} style={styles.image} />
			{id && !isLoading && onDelete && onChangeVisibility && (
				<View style={styles.actions}>
					<Button
						variant="outline"
						onPress={() => onDelete(id)}
						iconLeft={<Icons.DeleteIcon color={COLORS.plum} />}
					/>
				</View>
			)}

			{isLoading && (
				<View style={styles.loader}>
					<ActivityIndicator color={COLORS.plum} />
				</View>
			)}
		</View>
	);
}
