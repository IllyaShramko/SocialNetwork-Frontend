import { useUserContext } from "@modules/auth/context/user.context";
import { Container } from "@modules/friends";
import { useGetFriendsQuery } from "@modules/friends/api";
import { COLORS } from "@shared/constants/colors";
import { View } from "react-native";

export default function Page() {
	const { user } = useUserContext();
	const { data: friendsData } = useGetFriendsQuery();
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<Container
				name="AllF"
				profiles={friendsData?.map((friend) =>
					user?.profile?.id === friend.fromProfileId
						? friend.toProfile
						: friend.fromProfile,
				)}
			/>
		</View>
	);
}
