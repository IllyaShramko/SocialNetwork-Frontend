import {
	useDeleteImageMutation,
	useChangeVisibilityImageMutation,
	useUploadImagesMutation,
} from "@modules/settings/api";
import { COLORS } from "@shared/constants/colors";
import { pickImage } from "@shared/tools/pick-image";
import { LittleButton } from "@shared/ui/buttonInLittleModal";
import { Icons } from "@shared/ui/icons";
import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { ImageItem } from "../imageItem/ImageItem";
import { AlbumProps } from "./album-item.types";
import { Button } from "@shared/ui/button";
import { styles } from "./album-item.styles";

export function AlbumItem(props: AlbumProps) {
	const { album, refetch } = props;
	const [deleteImage, { data: deletedImage }] = useDeleteImageMutation();
	const [changeVisibilityImage, { data: changedImage }] =
		useChangeVisibilityImageMutation();
	const [tempImages, setTempImages] = useState<
		{ uri: string; albumId: number }[]
	>([]);
	const [uploadImages] = useUploadImagesMutation();
	const [whichActive, setWhichActive] = useState<number | null>(null);
	const [loadingIds, setLoadingIds] = useState<number[]>([]);

	async function handleAddImages(albumId: number) {
		const result = await pickImage(false, {
			allowsMultipleSelection: true,
			mediaTypes: ["images"],
			quality: 0.8,
		});

		if (result.status === "error") {
			console.log(result.message);
			return;
		}

		const newTempAssets = result.assets.map((asset) => ({
			uri: asset.uri,
			albumId: albumId,
		}));

		setTempImages((prev) => [...prev, ...newTempAssets]);

		const cleanData = result.assets.map((asset) => asset.uri);

		try {
			await uploadImages({
				albumId: albumId,
				images: cleanData,
			}).unwrap();

			refetch();

			setTempImages((prev) =>
				prev.filter(
					(temp) =>
						!newTempAssets.some(
							(newTemp) => newTemp.uri === temp.uri,
						),
				),
			);
		} catch (error) {
			console.error("Upload failed:", error);
			setTempImages((prev) =>
				prev.filter(
					(temp) =>
						!newTempAssets.some(
							(newTemp) => newTemp.uri === temp.uri,
						),
				),
			);
		}
	}
	async function handleDeleteImage(albumId: number, imageId: number) {
		setLoadingIds((prev) => [...prev, imageId]);
		try {
			const response = await deleteImage({
				imageId,
				albumId,
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
		setLoadingIds((prev) => prev.filter((id) => id !== imageId));
	}
	async function handleChangeVisibilityImage(
		albumId: number,
		imageId: number,
	) {
		setLoadingIds((prev) => [...prev, imageId]);
		try {
			const response = await changeVisibilityImage({
				imageId,
				albumId,
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
		setLoadingIds((prev) => prev.filter((id) => id !== imageId));
	}
	return (
		<View key={album.id} style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>{album.name}</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 24,
					}}
				>
					<Button
						variant="outline"
						iconLeft={<Icons.EyeOpenedIcon />}
						onPress={() => {
							console.log("isVisible Change");
						}}
					/>

					<TouchableOpacity
						style={styles.threePoint}
						onPress={() => {
							if (whichActive !== album.id) {
								setWhichActive(album.id);
							} else {
								setWhichActive(null);
							}
						}}
					>
						<Icons.threePointsIcon />
					</TouchableOpacity>
					{whichActive === album.id && (
						<View style={styles.modalEditAlbum}>
							<LittleButton
								text="Редагувати допис"
								iconLeft={<Icons.EditIcon />}
								onPress={() => {
									console.log("hello world rediction");
								}}
							/>
							<View
								style={{
									width: "100%",
									height: 1,
									backgroundColor: COLORS.plum,
								}}
							/>
							<LittleButton
								text="Видалити альбом"
								iconLeft={<Icons.DeleteIcon />}
								onPress={() => {
									console.log("hello world deletion");
								}}
							/>
						</View>
					)}
				</View>
			</View>
			<View style={styles.body}>
				{album.images.map((img) => (
					<ImageItem
						key={img.id}
						id={img.id}
						uri={`http://192.168.50.244:8000/media/thumb/${img.filename}`}
						isLoading={loadingIds.includes(img.id)}
						onDelete={(id) => {
							handleDeleteImage(album.id, img.id);
						}}
						onChangeVisibility={(id) => {
							handleChangeVisibilityImage(album.id, img.id);
						}}
						isVisible={img.isVisible}
					/>
				))}

				{tempImages.map((temp) => (
					<ImageItem
						key={temp.uri}
						uri={temp.uri}
						isLoading={true}
						isVisible={true}
					/>
				))}
				<TouchableOpacity
					style={styles.addImageButton}
					onPress={() => handleAddImages(album.id)}
				>
					<Button variant="outline" iconLeft={<Icons.PlusIcon />} />
				</TouchableOpacity>
			</View>
		</View>
	);
}
