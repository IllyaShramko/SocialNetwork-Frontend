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
	newPassword: string
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
