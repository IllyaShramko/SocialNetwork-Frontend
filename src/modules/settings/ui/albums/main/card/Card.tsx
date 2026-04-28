import { ScrollView, Text, View } from "react-native";
import { styles as stylesAlbum } from "../albumItem/album-item.styles";
import { useEffect, useState } from "react";
import { ModalCreateAlbum } from "../modalCreate/ModalCreateAlbum";
import { useLazyAlbumsQuery } from "@modules/settings/api";
import { Button } from "@shared/ui/button";
import { Icons } from "@shared/ui/icons";
import { AlbumItem } from "../albumItem/AlbumItem";
export function MainCard() {
	const [getAlbums, { data }] = useLazyAlbumsQuery();
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

	useEffect(() => {
		getAlbums();
	}, []);

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, gap: 8 }}>
			{data && data.length !== 0 ? (
				<>
					<View style={stylesAlbum.container}>
						<View style={stylesAlbum.header}>
							<Text style={stylesAlbum.textHeader}>
								Додати ще альбом
							</Text>
							<Button
								variant="outline"
								iconLeft={<Icons.PlusIcon />}
								onPress={async () => {
									setIsVisibleModal(true);
								}}
							/>
						</View>
					</View>
					{data.map((album) => {
						return (
							<AlbumItem
								key={album.id}
								album={album}
								refetch={getAlbums}
							/>
						);
					})}
				</>
			) : (
				<View style={stylesAlbum.container}>
					<View style={stylesAlbum.header}>
						<Text style={stylesAlbum.textHeader}>
							Немає ще жодного альбому
						</Text>
						<Button
							variant="outline"
							iconLeft={<Icons.PlusIcon />}
							onPress={async () => {
								setIsVisibleModal(true);
							}}
						/>
					</View>
				</View>
			)}
			<ModalCreateAlbum
				visible={isVisibleModal}
				onClose={() => {
					setIsVisibleModal(false);
					getAlbums();
				}}
			/>
		</ScrollView>
	);
}
