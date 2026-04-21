import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./card.styles";
import { useEffect, useState } from "react";
import { COLORS } from "@shared/constants/colors";
import { ModalCreateAlbum } from "../modalCreate/ModalCreateAlbum";
import { useLazyAlbumsQuery } from "@modules/settings/api";
import { Image } from "expo-image";
import { Button } from "@shared/ui/button";
import { LittleButton } from "@shared/ui/buttonInLittleModal";
import { Icons } from "@shared/ui/icons";

export function HeadCard() {
	const [getAlbums, { data }] = useLazyAlbumsQuery();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
	const [whichActive, setWhichActive] = useState<number | null>(null);
	useEffect(() => {
		getAlbums();
	}, []);

	return (
		<ScrollView>
			{data && data.length !== 0 ? (
				data.map((album) => {
					return (
						<View
							key={album.id}
							style={[styles.container, isEdit && styles.focus]}
						>
							<View style={styles.header}>
								<Text style={styles.textHeader}>
									{album.name}
								</Text>
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

									<TouchableOpacity style={styles.threePoint} onPress={() => {
										if (whichActive !== album.id) {
											setWhichActive(album.id)
										} else {
											setWhichActive(null)
										}

									}}>
										<Icons.threePointsIcon />
									</TouchableOpacity>
									{whichActive === album.id && (
										<View style={styles.modalEditAlbum}>
											<LittleButton
												text="Редагувати допис"
												iconLeft={<Icons.EditIcon />}
												onPress={() => {
													console.log(
														"hello world rediction",
													);
												}}
											/>
											<View style={{ width: "100%", height: 1, backgroundColor: COLORS.plum }} />
											<LittleButton
												text="Видалити публікацію"
												iconLeft={<Icons.DeleteIcon />}
												onPress={() => {
													console.log(
														"hello world deletion",
													);
												}}
											/>
										</View>
									)}
								</View>
							</View>
							<View style={styles.body}>
								{album.images.length !== 0 &&
									album.images.map((image) => (
										<View
											style={styles.imageAlbumContainer}
										>	
											
											<Image
												source={{
													uri: `http://192.168.50.244:8000/images/${image.filename}`,
												}}
											/>
										</View>
									))}
								<TouchableOpacity style={styles.addImageButton}>
									<Button
										variant="outline"
										iconLeft={<Icons.PlusIcon />}
									/>
								</TouchableOpacity>
							</View>
						</View>
					);
				})
			) : (
				<View style={[styles.container, isEdit && styles.focus]}>
					<View style={styles.header}>
						<Text style={styles.textHeader}>
							Немає ще жодного альбому
						</Text>
						<Button
							variant="outline"
							iconLeft={<Icons.PlusIcon />}
							onPress={async () => {
								setIsVisibleModal(true);
							}}
							style={isEdit && { backgroundColor: COLORS.plum50 }}
						/>
					</View>
				</View>
			)}
			<ModalCreateAlbum
				visible={isVisibleModal}
				onClose={() => {
					setIsVisibleModal(false);
					getAlbums();
					console.log("hello world!");
				}}
			/>
		</ScrollView>
	);
}
