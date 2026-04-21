export interface UpdateAvatarCredentials {
	avatar: string;
}
export interface UpdateSignatureCredentials {
	signature: string;
}
export interface UpdateUserProfileCredentaials {
	firstName?: string;
	surname?: string;
	email?: string;
	username?: string;
	birthday?: Date;
}
export interface UpdatePasswordCredentials {
	newPassword: string;
}

export interface CodeValidateCredentials {
	email: string;
	code: string;
}
export interface CodeValidateResponse {
	message: string;
}

export interface CodeGenerateCredentials {
	email: string;
}
export interface CodeGenerateResponse {
	message: string;
}
export type Tag = {
	id: number;
	name: string;
};
export type Album = {
	id: number;
	year: number;
	name: string;
	images: Image[];
	topic: Tag;
	topicId: number;
	userId: number;
};
export type Image = {
	id: number;
	filename: string;
	isVisible: boolean;
	albumId: number;
};
export interface AlbumCredentials {
	name: string;
	topicId: number;
	year: number;
}
export interface UploadImagesArgs {
	albumId: number;
	images: string[];
}
