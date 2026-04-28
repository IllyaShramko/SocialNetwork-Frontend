import { useUserContext } from "@modules/auth/context/user.context";
import { useDeleteAvatarMutation } from "@modules/settings/api";
import { ENV } from "@shared/constants/env";
import { Button } from "@shared/ui/button";
import { Icons } from "@shared/ui/icons";
import { useState } from "react";
import { Text, View } from "react-native";
import { ImageItem } from "../imageItem/ImageItem";

export function HeadCard() {
    const { user, setUser } = useUserContext()
    const [deleteImage, { data: deletedImage }] = useDeleteAvatarMutation();
	const [loadingIds, setLoadingIds] = useState<number[]>([]);

    const [tempImages, setTempImages] = useState<
        { uri: string; albumId: number }[]
    >([]);
    
	async function handleDeleteImage(id: number) {
		setLoadingIds((prev) => [...prev, id]);
		try {
			const response = await deleteImage({
				id,
			});
		} catch (error) {
			console.log(error);
		}
		setLoadingIds((prev) => prev.filter((id) => id !== id));
	}

	return (
		<View></View>
		// <View style={styles.container}>
		// 	<View style={styles.header}>
		// 		<Text style={styles.textHeader}>Мої фото</Text>
		// 		<Button
		// 			variant="outline"
		// 			iconLeft={<Icons.GalaryIcon />}
		// 			text="Додати фото"
		// 			onPress={}
		// 		/>
		// 	</View>
		// 	<View style={styles.body}>
		// 		{user?.avatars.map((img) => (
		// 			<ImageItem
		// 				key={img.id}
		// 				id={img.id}
		// 				uri={`http://${ENV.HOST}:${ENV.PORT}/media/thumb/${img.image.filename}`}
		// 				isLoading={loadingIds.includes(img.id)}
		// 				onDelete={(id) => {
		// 					handleDeleteImage(img.id);
		// 				}}
		// 			/>
		// 		))}

		// 		{tempImages.map((temp) => (
		// 			<ImageItem
		// 				key={temp.uri}
		// 				uri={temp.uri}
		// 				isLoading={true}
		// 			/>
		// 		))}
		// 	</View>
		// </View>
	);
}
