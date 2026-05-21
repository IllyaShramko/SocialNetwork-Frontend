import { Album } from "@shared/api/types";

export type ModalUpdateAlbumProps = {
	visible: boolean;
	onClose: () => void;
	album: Album;
};
