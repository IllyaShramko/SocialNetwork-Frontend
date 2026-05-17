import { ScrollView } from "react-native";
import { Container } from "../container";
import {
	useGetForYouRecsQuery,
	useGetFriendsQuery,
	useGetRequestsQuery,
} from "@modules/friends/api";
import { useUserContext } from "@modules/auth/context/user.context";

export function AllContainer() {
	const { user } = useUserContext();
	const { data: reqsData } = useGetRequestsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});
	const { data: recsData } = useGetForYouRecsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});
	const { data: friendsData } = useGetFriendsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});

	return (
		<ScrollView contentContainerStyle={{ gap: 8 }}>
			<Container
				name="Reqs"
				profiles={reqsData?.map((req) => req.fromProfile)}
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
					user?.profile?.id === friend.fromProfileId
						? friend.toProfile
						: friend.fromProfile,
				)}
				redirectTo="/friends/all"
			/>
		</ScrollView>
	);
}
