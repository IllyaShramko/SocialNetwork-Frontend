export type PostCreateDto = {
	title: string;
	topic: string;
	content: string;
	tagIds?: number[];
	images?: { uri: string }[];
	links?: string[];
};

export type PostsPaginationParams = {
	page?: number;
	limit?: number;
};
