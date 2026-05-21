import { useCallback, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { Container } from "../container";
import {
	useGetForYouRecsQuery,
	useGetFriendsQuery,
	useGetRequestsQuery,
} from "@modules/friends/api";
import { useUserContext } from "@modules/auth/context/user.context";

export function AllContainer() {
	const { user } = useUserContext();
	const [refreshing, setRefreshing] = useState(false);
	const { data: reqsData, refetch: refetchReqs } = useGetRequestsQuery();
	const { data: recsData, refetch: refetchRecs } = useGetForYouRecsQuery();
	const { data: friendsData, refetch: refetchFriends } = useGetFriendsQuery();

	const handleRefresh = useCallback(async () => {
		setRefreshing(true);
		try {
			await Promise.all(
				[
					refetchReqs().unwrap(),
					refetchRecs().unwrap(),
					refetchFriends().unwrap(),
				].map((request) => request.catch(() => undefined)),
			);
		} finally {
			setRefreshing(false);
		}
	}, [refetchFriends, refetchRecs, refetchReqs]);

	return (
		<ScrollView
			contentContainerStyle={{ gap: 8 }}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={handleRefresh}
				/>
			}
		>
			<Container
				name="Reqs"
				profiles={reqsData?.map((req) => req.fromUser)}
				redirectTo="/friends/requests"
			/>
			<Container
				name="Recs"
				profiles={recsData}
				redirectTo="/friends/recs"
			/>
			<Container
				name="AllF"
				profiles={friendsData?.map((friend) =>
					user?.id === friend.fromUserId
						? friend.toUser
						: friend.fromUser,
				)}
				redirectTo="/friends/all"
			/>
		</ScrollView>
	);
}
