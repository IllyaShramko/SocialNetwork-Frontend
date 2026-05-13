import { Text, TouchableOpacity, View } from "react-native";
import { CardProps } from "./card.types";
import { styles } from "./card.styles";
import { Image } from "expo-image";
import { ENV } from "@shared/constants/env";
import { useRouter } from "expo-router";
import { useSelectedProfileContext } from "@modules/friends/context/friends.context";

export function Card(props: CardProps) {
	const { children, profile, status } = props;
	const { setStatus, setUser } = useSelectedProfileContext();
	const router = useRouter();
	function handleClick() {
		console.log("Clicked on user with profile id: ", profile.id);

		setStatus(status);
		setUser(profile);

		router.push("/profile-page/profile");
	}

	return (
		<View style={styles.card}>
			<TouchableOpacity onPress={handleClick}>
				<View style={styles.body}>
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
						<Text style={styles.pseudonym}>
							{profile.pseudonym}
						</Text>

						<Text style={styles.username}>
							{profile.user.username}
						</Text>
					</View>
				</View>
			</TouchableOpacity>

			{children}
		</View>
	);
}