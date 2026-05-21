import { Text, View } from "react-native";
import { CardProps } from "./card.types";
import { styles } from "./card.styles";
import { Image } from "expo-image";
import { ENV } from "@shared/constants/env";

export function Card(props: CardProps) {
	const { children, user } = props;

	return (
		<View style={styles.card}>
			<View style={styles.body}>
				<View style={styles.avatar}>
					<Image
						source={
							user.profile.avatar
								? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${user.profile.avatar}`
								: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
						}
						style={styles.avatarImg}
					/>
					<View style={[styles.indicator, styles.inactive]} />
				</View>
				<View style={styles.textsInfo}>
					<Text style={styles.pseudonym}>
						{user.profile.pseudonym}
					</Text>
					<Text style={styles.username}>@{user.username}</Text>
				</View>
			</View>
			{children}
		</View>
	);
}
