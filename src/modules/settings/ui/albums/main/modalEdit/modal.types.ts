import { Album } from "@modules/settings/api/api.types";

export type ModalUpdateAlbumProps = {
	visible: boolean;
	onClose: () => void;
	album: Album;
};
