import { useSelectedProfileContext } from "@modules/friends/context/friends.context";
import { Icons } from "@shared/ui/icons";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./profile-preview.styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import { Button } from "@shared/ui/button";
import { ENV } from "@shared/constants/env";
import {
	useGetProfileByIdQuery,
	usePostAcceptRequestMutation,
	usePostAddRequestMutation,
	usePostDeclineRequestMutation,
	usePostDeleteFriendMutation,
} from "@modules/friends/api";

export function ProfilePreview() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { status, setStatus } = useSelectedProfileContext();
	const { data: profile } = useGetProfileByIdQuery({ id: +id });
	const [sendRequest] = usePostAddRequestMutation();
	const [acceptRequest] = usePostAcceptRequestMutation();
	const [declineRequest] = usePostDeclineRequestMutation();
	const [removeFriend] = usePostDeleteFriendMutation();

	const router = useRouter();

	if (!profile) return <ActivityIndicator />;
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity
					style={styles.backButtonPlaceholder}
					onPress={() => {
						if (router.canGoBack()) router.back();

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
							@{profile?.user.username}
						</Text>
					</View>
				</View>
				<View style={styles.stats}>
					<View style={styles.statContainer}>
						<Text style={styles.stat}>0</Text>
						<Text style={styles.description}>Дописи</Text>
					</View>
					<View style={styles.hr} />
					<View style={styles.statContainer}>
						<Text style={styles.stat}>0</Text>
						<Text style={styles.description}>Читачі</Text>
					</View>
					<View style={styles.hr} />
					<View style={styles.statContainer}>
						<Text style={styles.stat}>0</Text>
						<Text style={styles.description}>Друзі</Text>
					</View>
				</View>
				<View style={styles.btns}>
					{status === "Reqs" ? (
						<View style={styles.btns}>
							<Button
								variant="fill"
								text="Підтвердити"
								onPress={async () => {
									try {
										await acceptRequest({
											id: profile?.id,
										}).unwrap();
									} catch (error) {
										console.log(error);
									}
									if (router.canGoBack()) {
										router.back();
									} else {
										router.replace("/friends");
									}
								}}
							/>
							<Button
								variant="outline"
								text="Видалити"
								onPress={async () => {
									try {
										await declineRequest({
											id: profile?.id,
										}).unwrap();
									} catch (error) {
										console.log(error);
									}
									if (router.canGoBack()) {
										router.back();
									} else {
										router.replace("/friends");
									}
								}}
							/>
						</View>
					) : status === "Recs" ? (
						<View style={styles.btns}>
							<Button
								variant="fill"
								text="Додати"
								onPress={async () => {
									console.log(profile.id)
									try {
										const response = await sendRequest({
											id: profile.id,
										}).unwrap();
										console.log(response)
									} catch (error) {
										console.log(error);
									}
									if (router.canGoBack()) {
										router.back();
									} else {
										router.replace("/friends");
									}
								}}
							/>
							<Button variant="outline" text="Видалити" />
						</View>
					) : (
						<View style={styles.btns}>
							<Button variant="fill" text="Повідомлення" />
							<Button
								variant="outline"
								text="Видалити"
								onPress={async () => {
									try {
										await removeFriend({
											id: profile?.id,
										}).unwrap();
									} catch (error) {
										console.log(error);
									}
									if (router.canGoBack()) {
										router.back();
									} else {
										router.replace("/friends");
									}
								}}
							/>
						</View>
					)}
				</View>
			</View>
		</View>
	);
}
