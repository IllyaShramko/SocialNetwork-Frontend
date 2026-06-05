import { useCallback, useEffect, useState } from "react";
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
	const {
		data: reqsData,
		isLoading: isLoadingReqs,
		refetch: refetchReqs,
	} = useGetRequestsQuery();
	const {
		data: recsData,
		isLoading: isLoadingRecs,
		refetch: refetchRecs,
	} = useGetForYouRecsQuery();
	const {
		data: friendsData,
		isLoading: isLoadingFriends,
		refetch: refetchFriends,
	} = useGetFriendsQuery();

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
	useEffect(() => {
		console.log(isLoadingFriends, isLoadingRecs, isLoadingReqs);
	}, [isLoadingFriends, isLoadingRecs, isLoadingReqs]);

	console.log("Reqs: ", reqsData);
	console.log("Recs: ", recsData);
	console.log("Friends: ", friendsData);

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
				profiles={reqsData ? reqsData.map((req) => req.fromUser) : []}
				redirectTo="/friends/requests"
				isLoading={isLoadingReqs}
			/>
			<Container
				name="Recs"
				profiles={recsData}
				redirectTo="/friends/recs"
				isLoading={isLoadingRecs}
			/>
			<Container
				name="AllF"
				profiles={friendsData?.map((friend) =>
					user?.id === friend.fromUserId
						? friend.toUser
						: friend.fromUser,
				)}
				redirectTo="/friends/all"
				isLoading={isLoadingFriends}
			/>
		</ScrollView>
	);
}
