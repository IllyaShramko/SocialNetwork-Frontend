import { useGetMyPostsQuery } from "@modules/posts/api";
import { ActivityIndicator, FlatList, View } from "react-native";
import { PostItem } from "../postItem";

export function PostList() {
	const { data, isFetching, isLoading } = useGetMyPostsQuery();
	return (
		<View>
			{isFetching || isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<PostItem key={item.id} post={item} />
					)}
					contentContainerStyle={{ gap: 8, padding: 6 }}
				/>
			)}
		</View>
	);
}
