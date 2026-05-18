import { useSelectedProfileContext } from "@modules/friends/context/friends.context";
import { Icons } from "@shared/ui/icons";
import {
	ActivityIndicator,
	FlatList,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "./profile-preview.styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import { Button } from "@shared/ui/button";
import { ENV } from "@shared/constants/env";
import {
	useGetPostsByUserIdQuery,
	useGetProfileByIdQuery,
	usePostAcceptRequestMutation,
	usePostAddRequestMutation,
	usePostDeclineRequestMutation,
	usePostDeleteFriendMutation,
} from "@modules/friends/api";
import { COLORS } from "@shared/constants/colors";
import { PostItem } from "@modules/friends/@x";

export function ProfilePreview() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { status, setStatus } = useSelectedProfileContext();
	const { data: profile } = useGetProfileByIdQuery({ id: +id });
	const { data: posts } = useGetPostsByUserIdQuery({ id: +id });
	const [sendRequest] = usePostAddRequestMutation();
	const [acceptRequest] = usePostAcceptRequestMutation();
	const [declineRequest] = usePostDeclineRequestMutation();
	const [removeFriend] = usePostDeleteFriendMutation();

	const router = useRouter();

	if (!profile) return <ActivityIndicator />;
	return (
		<ScrollView contentContainerStyle={styles.container}>
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
									console.log(profile.id);
									try {
										const response = await sendRequest({
											id: profile.id,
										}).unwrap();
										console.log(response);
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
			<View style={styles.albumContainer}>
				<View style={styles.albumHeader}>
					<View style={styles.albumTitleImg}>
						<Icons.GalaryIcon color={COLORS.blue50} />
						<Text style={styles.albumTitleHeader}>Альбоми</Text>
					</View>
					<TouchableOpacity>
						<Text style={[styles.btnSeeMore, profile.albums.length === 0 && styles.btnDisabled]}>
							Дивитись всі
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.hrHorizontal} />
				{profile.albums.length !== 0 ? (
					<View style={styles.album}>
						<Text style={styles.albumName}>
							{profile.albums[0].name}
						</Text>
						<View style={styles.albumThemeAndYear}>
							<Text style={styles.albumTheme}>
								{profile.albums[0].theme}
							</Text>
							<Text style={styles.albumYear}>
								{profile.albums[0].year} рік
							</Text>
						</View>
						<View style={styles.imgs}>
							{profile.albums[0].images.map((img) => (
								<Image
									style={styles.image}
									source={img.image}
									key={img.id}
								/>
							))}
						</View>
					</View>
				) : (
					<Text>Тут поки що нічого немає...</Text>
				)}
			</View>
			<View style={styles.posts}>
				{posts?.map((post) => (
					<PostItem post={post} key={post.id} />
				))}
			</View>
		</ScrollView>
	);
}
