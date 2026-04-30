import { Text, View } from "react-native";
import { styles } from "./postItem.styles";
import { PostItemProps } from "./postItem.types";
import { Links } from "../links";
import { Tags } from "../tags";
import { PhotosContainer } from "../photosContainer";

export function PostItem({ post }: PostItemProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{post.text}</Text>

			{!!post.photos?.length && <PhotosContainer photos={post.photos} />}
			{!!post.links?.length && <Links links={post.links} />}
			{!!post.tags?.length && <Tags tags={post.tags} />}
		</View>
	);
}