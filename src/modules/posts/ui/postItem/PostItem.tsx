import { Text, TouchableOpacity, View } from "react-native";
import { PostItemProps } from "./post-item.types";
import { Image } from "expo-image";
import { ENV } from "@shared/constants/env";
import { styles } from "./post-item.styles";
import { Icons } from "@shared/ui/icons";
export function PostItem(props: PostItemProps) {
	const { post } = props;
	const tempImages = [...post.images];

	const row1 = tempImages.splice(0, 2);
	const row2 = tempImages.splice(0, 3);
	const row3 = tempImages.splice(0, 2);

	const layout = [row1, row2, row3].filter((row) => row.length > 0);

	console.log(layout);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.head}>
					<View style={styles.avatarContainer}>
						<Image
							source={
								post.author.profile?.avatar
									? `http://${ENV.HOST}:${ENV.PORT}/media/thumb/${post.author.profile?.avatar}`
									: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
							}
							style={styles.avatar}
						/>
					</View>
					<Text style={styles.username}>{post.author.username}</Text>
				</View>
				{post.author.signature && (
					<View>
						<Image source={post.author.signature} />
					</View>
				)}
			</View>
			<View style={styles.body}>
				<View style={styles.texts}>
					<Text style={styles.topic}>{post.title}</Text>
					<Text style={styles.description}>{post.content}</Text>
					<Text style={styles.tags}>
						{post.tags.map(({ tag }) => `#${tag.name} `)}
					</Text>
				</View>
				{layout.length !== 0 && (
					<View style={styles.images}>
						{layout.map((row, index) => (
							<View
								key={`post${index}`}
								style={styles.lineOfImages}
							>
								{row.map((image) => (
									<View style={{ flex: 1 }}>
										<Image
											style={{
												flex: 1,
												borderRadius: 16,
											}}
											source={`http://${ENV.HOST}:${ENV.PORT}/media/thumb/${image.comressedImage}`}
										/>
									</View>
								))}
							</View>
						))}
					</View>
				)}
				<View style={styles.footer}>
					<View style={styles.containerBtn}>
						<TouchableOpacity>
							<Icons.HeartIcon />
						</TouchableOpacity>
						<Text style={styles.textBtn}>{post.hearts} Вподобань</Text>
					</View>
					<View style={styles.containerBtn}>
						<TouchableOpacity>
							<Icons.LikeIcon />
						</TouchableOpacity>
						<Text style={styles.textBtn}>{post.likes} Вподобань</Text>
					</View>
					<View style={styles.containerBtn}>
						<TouchableOpacity>
							<Icons.EyeOpenedIcon />
						</TouchableOpacity>
						<Text style={styles.textBtn}>{post.views} Переглядів</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
