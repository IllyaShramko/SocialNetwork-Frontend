import { useSelectedProfileContext } from "@modules/friends/context/friends.context";
import { Icons } from "@shared/ui/icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./profile-preview.styles";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { Button } from "@shared/ui/button";
import { ENV } from "@shared/constants/env";

export function ProfilePreview() {
	const { profile, setUser, status, setStatus } = useSelectedProfileContext();
	const router = useRouter();

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity
					style={styles.backButtonPlaceholder}
					onPress={() => {
						if (router.canGoBack()) router.back();
						setUser(null);
						setStatus(null);
					}}
				>
					<Icons.ArrowIcon />
				</TouchableOpacity>
				<View style={styles.profilePreview}>
					<View style={styles.avatar}>
						<Image
							source={
								profile?.avatar
									? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${profile.avatar}`
									: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
							}
							style={styles.avatarImg}
						/>
						<View style={[styles.indicator, styles.inactive]} />
					</View>
					<View style={styles.textsInfo}>
						<Text style={styles.pseudonym}>
							{profile?.pseudonym}
						</Text>
						<Text style={styles.username}>
							{profile?.user.username}
						</Text>
					</View>
				</View>
				<View style={styles.stats}>
					<View style={styles.statContainer}>
						<Text style={styles.stat}>3</Text>
						<Text style={styles.description}>Дописи</Text>
					</View>
					<View style={styles.hr} />
					<View style={styles.statContainer}>
						<Text style={styles.stat}>12.1K</Text>
						<Text style={styles.description}>Читачі</Text>
					</View>
					<View style={styles.hr} />
					<View style={styles.statContainer}>
						<Text style={styles.stat}>222</Text>
						<Text style={styles.description}>Друзі</Text>
					</View>
				</View>
				<View style={styles.btns}>
					{status === "Reqs" ? (
						<View style={styles.btns}>
							<Button variant="fill" text="Підтвердити" />
							<Button variant="outline" text="Видалити" />
						</View>
					) : status === "Recs" ? (
						<View style={styles.btns}>
							<Button variant="fill" text="Додати" />
							<Button variant="outline" text="Видалити" />
						</View>
					) : (
						<View style={styles.btns}>
							<Button variant="fill" text="Повідомлення" />
							<Button variant="outline" text="Видалити" />
						</View>
					)}
				</View>
			</View>
		</View>
	);
}
