export type ApiError = {
	data: {
		message: string;
		status: "error";
	};
	status: number;
};

export function isApiError(error: unknown): error is ApiError {
	return (
		typeof error === "object" &&
		error != null &&
		"status" in error &&
		"data" in error
	);
}

export type User = {
	id: number;
	email: string;
	username: string | null;
	firstName: string | null;
	surname: string | null;
	birthday: Date | null;
	signature: string | null;
	isActive: boolean;
	avatars: Avatar[];
};

export type Avatar = {
	image: Image;
	id: number;
	imageId: number;
	userId: number;
};

export type Image = {
	id: number;
	userId: number;
	filename: string;
	isVisible: boolean;
	albumId: number | null;
	imageId: number | null;
};

export type Post = {
	id: number;
	title: string;
	topic: string;
	description: string;
	views: number;
	author: User;
	authorId: number;
	createdAt: Date;
	links: Link[];
	images: Image[];
	tags: TagPost[];
	likes: number;
	hearted: number;
	// will be determined on the backend
	isLiked: boolean;
	isHearted: boolean;
};

export type Link = {
	id: number;
	postId: number;
	href: string;
};

export type TagPost = {
	id: number;
	tag: Tag;
	postId: number;
	tagId: number;
};

export type Tag = {
	id: number;
	name: string;
};
