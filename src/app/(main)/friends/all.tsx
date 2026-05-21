import { useUserContext } from "@modules/auth/context/user.context";
import { Container } from "@modules/friends";
import { useGetFriendsQuery } from "@modules/friends/api";
import { COLORS } from "@shared/constants/colors";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

export default function Page() {
	const { user } = useUserContext();
	const [refreshing, setRefreshing] = useState(false);
	const { data: friendsData, refetch } = useGetFriendsQuery();

	const handleRefresh = useCallback(async () => {
		setRefreshing(true);
		try {
			await refetch()
				.unwrap()
				.catch(() => undefined);
		} finally {
			setRefreshing(false);
		}
	}, [refetch]);

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
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
					name="AllF"
					profiles={friendsData?.map((friend) =>
						user?.id === friend.fromUserId
							? friend.toUser
							: friend.fromUser,
					)}
				/>
			</ScrollView>
		</View>
	);
}
