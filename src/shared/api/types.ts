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
	lastName: string | null;
	signature: string | null;
	dateJoined: Date;
	lastLogin: Date;
	isSuperuser: boolean;
	isStaff: boolean;
	isActive: boolean;
	profile: Profile | null;
};

export type Profile = {
	id: number;
	signature: string | null;
	userId: number;
	birthDate: Date | null;
	pseudonym: string | null;
	avatar: string | null;
	is_image_signature: boolean;
	is_text_signature: boolean;
};

// export type Avatar = {
// 	image: Image;
// 	id: number;
// 	imageId: number;
// 	userId: number;
// };

export type PostImage = {
	id: number;
	originalImage: string;
	comressedImage: string;
	postId: number;
};

export type Post = {
	id: number;
	title: string;
	topic: string;
	content: string;
	author: User;
	authorId: number;
	createdAt: Date;
	links: Link[];
	images: PostImage[];
	tags: TagPost[];
	// will be determined on the backend
	likes: number;
	hearts: number;
	views: number;
	isLiked: boolean;
	isHearted: boolean;
	isViewed: boolean;
};

export type Link = {
	id: number;
	postId: number;
	url: string;
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
