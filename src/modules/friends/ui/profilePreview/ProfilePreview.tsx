import { ActivityIndicator, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import {
	useGetPostsByUserIdQuery,
	useGetProfileByIdQuery,
} from "@modules/friends/api";
import { PostItem } from "@modules/friends/@x";
import { ProfileHeader } from "../profileHeader";
import { useState } from "react";
import { COLORS } from "@shared/constants/colors";

const LIMIT = 5;

export function ProfilePreview() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [page, setPage] = useState(1);
	const { data: profile } = useGetProfileByIdQuery({ id: +id });
	const {
		data: posts,
		isFetching,
		isLoading,
	} = useGetPostsByUserIdQuery({ id: +id, page, limit: LIMIT });
	const hasMore = Boolean(posts && posts.length >= page * LIMIT);

	const loadMoreItems = () => {
		if (isFetching || !hasMore) return;
		setPage((prevPage) => prevPage + 1);
	};

	if (!profile || isLoading) return <ActivityIndicator />;

	return (
		<FlatList
			data={posts ?? []}
			renderItem={({ item }) => <PostItem post={item} />}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={{ gap: 8 }}
			ListHeaderComponent={<ProfileHeader profile={profile} />}
			ListFooterComponent={
				isFetching && page > 1 ? (
					<ActivityIndicator size="small" color={COLORS.blue} />
				) : null
			}
			onEndReached={loadMoreItems}
			onEndReachedThreshold={0.4}
		/>
	);
}
