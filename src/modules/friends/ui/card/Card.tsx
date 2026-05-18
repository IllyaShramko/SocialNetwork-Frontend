import { Text, TouchableOpacity, View } from "react-native";
import { CardProps } from "./card.types";
import { styles } from "./card.styles";
import { Image } from "expo-image";
import { ENV } from "@shared/constants/env";
import { useRouter } from "expo-router";
import { useSelectedProfileContext } from "@modules/friends/context/friends.context";

export function Card(props: CardProps) {
	const { children, profile, status } = props;
	const { setStatus } = useSelectedProfileContext();
	const router = useRouter();
	async function handleClick() {
		setStatus(status);
		router.push({
			pathname: "/profile-page/[id]",
			params: { id: profile.id },
		});
	}
	return (
		<View style={styles.card}>
			<TouchableOpacity onPress={handleClick} style={styles.body}>
				<View style={styles.avatar}>
					<Image
						source={
							profile.avatar
								? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${profile.avatar}`
								: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
						}
						style={styles.avatarImg}
					/>
					<View style={[styles.indicator, styles.inactive]} />
				</View>
				<View style={styles.textsInfo}>
					<Text style={styles.pseudonym}>{profile.pseudonym}</Text>
					<Text style={styles.username}>
						@{profile.user.username}
					</Text>
				</View>
			</TouchableOpacity>
			{children}
		</View>
	);
}
