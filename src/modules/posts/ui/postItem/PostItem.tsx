import { Text, View } from "react-native";
import { PostItemProps } from "./post-item.types";
import { Image } from "expo-image";
import { ENV } from "@shared/constants/env";
import { styles } from "./post-item.styles";

export function PostItem(props: PostItemProps) {
	const { post } = props;
	console.log(`${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.head}>
					<View style={styles.avatarContainer}>
						<Image
							source={
								post.author.avatars
									? post.author.avatars.length !== 0
										? `http://${ENV.HOST}:${ENV.PORT}/media/original/${post.author.avatars[0].image.filename}`
										: `http://${ENV.HOST}:${ENV.PORT}/media/original/default-avatar.jpg`
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
					<Text style={styles.topic}>{post.topic}</Text>
					<Text style={styles.description}>{post.description}</Text>
                    {/* <Text style={styles.tags}>{post.tags?.map(tag => `#${tag.tag.name} `)}</Text> */}
				</View>
			</View>
		</View>
	);
}
