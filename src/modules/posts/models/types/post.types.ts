export type TagPost = {
	id: number;
	name: string;
};

export type LinkPost = {
	id: number;
	url: string;
	title?: string;
};

export type PhotoPost = {
	id: number;
	url: string;
};

export type Post = {
	id: number;
	text: string;
	createdAt?: string;
	tags?: TagPost[];
	links?: LinkPost[];
	photos?: PhotoPost[];
};