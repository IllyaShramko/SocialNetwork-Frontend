import { Album } from "@shared/api/types";

export interface AlbumProps {
	album: Album;
	refetch: () => void;
}
