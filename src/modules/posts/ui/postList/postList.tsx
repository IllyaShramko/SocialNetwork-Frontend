import { FlatList, Text, View } from "react-native";
import { styles } from "./postList.styles";
import { PostListProps } from "./postList.types";
import { PostItem } from "../postItem";

export function PostList({ posts }: PostListProps) {
	if (!posts.length) {
		return (
			<View style={styles.emptyContainer}>
				<Text style={styles.emptyText}>Постів поки немає</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={posts}
			keyExtractor={(post) => String(post.id)}
			renderItem={({ item }) => <PostItem post={item} />}
			contentContainerStyle={styles.container}
		/>
	);
}