export type PostCreateDto = {
	title: string;
	topic: string;
	content: string;
	tagIds?: number[];
	images?: { uri: string }[];
	links?: string[];
};
