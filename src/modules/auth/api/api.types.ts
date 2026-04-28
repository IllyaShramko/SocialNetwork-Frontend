
export interface LoginResponse {
	token: string;
}
export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterResponse {
	token: string;
}
export interface RegisterCredentials {
	email: string;
	password: string;
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
