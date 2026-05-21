import { useGetMyPostsQuery } from "@modules/posts/api";
import { ActivityIndicator, FlatList, View } from "react-native";
import { PostItem } from "../postItem";
import { useState } from "react";

const LIMIT = 5;

export function PostList() {
	const [page, setPage] = useState(1);
	const { data, isFetching, isLoading } = useGetMyPostsQuery({
		page,
		limit: LIMIT,
	});
	const hasMore = Boolean(data && data.length >= page * LIMIT);

	const loadMoreItems = () => {
		if (isFetching || !hasMore) return;
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<View>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={data ?? []}
					renderItem={({ item }) => <PostItem post={item} />}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={{ gap: 8, padding: 6 }}
					ListFooterComponent={
						isFetching && page > 1 ? <ActivityIndicator /> : null
					}
					onEndReached={loadMoreItems}
					onEndReachedThreshold={0.4}
				/>
			)}
		</View>
	);
}
