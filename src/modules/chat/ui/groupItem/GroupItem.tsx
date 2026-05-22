import { Text, TouchableOpacity, View } from "react-native";
import { GroupItemProps } from "./group-item.types";
import { useUserContext } from "@modules/auth/context/user.context";
import { Icons } from "@shared/ui/icons";
import { Image } from "expo-image";
import { styles } from "./group-item.styles";
import { ENV } from "@shared/constants/env";
import { useRouter } from "expo-router";

export function GroupItem(props: GroupItemProps) {
	const { chat } = props;
	const router = useRouter();
	const { user } = useUserContext();
	return (
		<TouchableOpacity
			style={[
				styles.container,
				chat.unreadCount > 0 && styles.unreadedContainer,
			]}
			onPress={() => {
				router.push({
					pathname: "/(main)/chats/chat/[chatId]",
					params: { chatId: chat.id },
				});
			}}
		>
			<View style={styles.avatarContainer}>
				{chat.users ? (
					user?.id === chat.users[0].id ? (
						<Image
							style={styles.avatar}
							source={
								chat.users[1].user.profile.avatar
									? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${chat.users[1].user.profile.avatar}`
									: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
							}
						/>
					) : (
						<Image
							style={styles.avatar}
							source={
								chat.users[0].user.profile.avatar
									? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${chat.users[0].user.profile.avatar}`
									: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
							}
						/>
					)
				) : (
					<Icons.DefaultGroupIcon />
				)}
			</View>
			<View style={styles.info}>
				<View style={styles.head}>
					<Text style={styles.nameChat}>
						{chat.isGroup
							? chat.name
							: chat.users
								? user?.id === chat.users[0].id
									? chat.users[1].user.profile.pseudonym
									: chat.users[0].user.profile.pseudonym
								: null}
					</Text>
					<Text style={styles.lastMessageTime}>20:10</Text>
				</View>

				{chat.messages.length !== 0 ? (
					chat.messages[0].text ? (
						<Text style={styles.lastMessageText}>
							{chat.messages[0].text}
						</Text>
					) : (
						<View
							style={{
								alignItems: "center",
								flexDirection: "row",
								gap: 4,
							}}
						>
							<Icons.GalaryIcon />
							<Text style={styles.lastMessageText}>Фото</Text>
						</View>
					)
				) : null}
				{/* {chat.messages[0].text || <><Icons.GalaryIcon/> Фото</>} */}
			</View>
		</TouchableOpacity>
	);
}
