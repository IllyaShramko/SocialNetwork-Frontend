export type ApiError = {
	data: {
		message: string;
		status: "error";
	};
	status: number;
};

export function isApiError(
	error: unknown,
): error is ApiError {
	return typeof error === "object" && error != null && "status" in error && "data" in error;
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
	avatars: Avatar[]
};
export type Avatar = {
	image: Image;
	id: number;
	imageId: number;
	userId: number;
}
export type Image = {
	id: number;
	userId: number;
	filename: string;
	isVisible: boolean;
	albumId: number | null;
}
