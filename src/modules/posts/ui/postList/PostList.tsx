import { useGetPostsQuery } from "@modules/posts/api";
import { ActivityIndicator, FlatList, View } from "react-native";
import { PostItem } from "../postItem";

export function PostList() {
	const { data, isFetching, isLoading } = useGetPostsQuery();
	return (
		<View>
			{isFetching || isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={data}
					renderItem={({ item }) => <PostItem post={item} />}
					contentContainerStyle={{ gap: 8, padding: 6 }}
				/>
			)}
		</View>
	);
}
