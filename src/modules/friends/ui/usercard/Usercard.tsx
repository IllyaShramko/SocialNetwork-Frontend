import { Image, Text, View } from "react-native";
import { styles } from "./usercard.styles";
import { UserCardProps } from "./userСard.types";



export function UserCard({
	user,
	children,
}: UserCardProps) {
	return (
		<View style={styles.container}>
			<View style={styles.avatarWrapper}>
				<Image
	                    source={{
		                    uri: user.profile?.avatar || "",
	            }}
	                style={styles.avatar}
                />

				<View style={styles.status} />
			</View>

			<Text style={styles.username}>
				{user.username}
			</Text>

			<Text style={styles.nickname}>
				@{user.firstName}
			</Text>

			<View style={styles.actions}>
				{children}
			</View>
		</View>
	);
}