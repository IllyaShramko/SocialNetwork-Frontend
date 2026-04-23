import { Album } from "@modules/settings/api/api.types";

export interface AlbumProps {
	album: Album;
	refetch: () => void;
}
