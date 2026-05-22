import { Text, TouchableOpacity, View } from "react-native";
import { ContactItemProps } from "./contact-item.types";
import { useUserContext } from "@modules/auth/context/user.context";
import { styles } from "./contact-item.styles";
import { Image } from "expo-image";
import { ENV } from "@shared/constants/env";
import { useSelectedProfileContext } from "@modules/friends/context/friends.context";
import { useRouter } from "expo-router";

export function ContactItem(props: ContactItemProps) {
	const { user } = useUserContext();
	const { setStatus } = useSelectedProfileContext();
	const { contact } = props;
	const router = useRouter();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => {
				setStatus("AllF");
				router.push({
					pathname: "/profile-page/[id]",
					params: {
						id:
							contact.fromUserId === user?.id
								? contact.toUserId
								: contact.fromUserId,
					},
				});
			}}
		>
			<View style={styles.avatarContainer}>
				{contact.fromUserId === user?.id ? (
					<Image
						style={styles.avatar}
						source={
							contact.toUser.profile.avatar
								? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${contact.toUser.profile.avatar}`
								: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
						}
					/>
				) : (
					<Image
						style={styles.avatar}
						source={
							contact.fromUser.profile.avatar
								? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${contact.fromUser.profile.avatar}`
								: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
						}
					/>
				)}
			</View>
			<Text style={styles.nameChat}>
				{contact.fromUserId === user?.id
					? contact.toUser.profile.pseudonym
					: contact.fromUser.profile.pseudonym}
			</Text>
		</TouchableOpacity>
	);
}
