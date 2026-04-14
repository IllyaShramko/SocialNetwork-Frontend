import { baseApi } from "@shared/api/base-api";
import {
	CodeGenerateCredentials,
	CodeGenerateResponse,
	CodeValidateCredentials,
	CodeValidateResponse,
	LoginCredentials,
	LoginResponse,
	MeResponse,
	RegisterCredentials,
	RegisterResponse,
} from "./api.types";

const authApi = baseApi.injectEndpoints({
	endpoints(builder) {
		return {
			login: builder.mutation<LoginResponse, LoginCredentials>({
				query: (body) => ({
					url: "/users/login",
					method: "POST",
					body,
				}),
			}),
			register: builder.mutation<RegisterResponse, RegisterCredentials>({
				query: (body) => {
					return {
						url: "/users/register",
						method: "POST",
						body,
					};
				},
			}),
			me: builder.query<MeResponse, void>({
				query() {
					return {
						url: "users/me",
					};
				},
			}),
			validateCode: builder.mutation<
				CodeValidateResponse,
				CodeValidateCredentials
			>({
				query: (body) => ({
					url: "/users/validate-code",
					method: "POST",
					body,
				}),
			}),
			generateCode: builder.mutation<
				CodeGenerateResponse,
				CodeGenerateCredentials
			>({
				query: (body) => ({
					url: "/users/generate-code",
					method: "POST",
					body,
				}),
			}),
		};
	},
});

export const {
	useLoginMutation,
	useMeQuery,
	useLazyMeQuery,
	useRegisterMutation,
	useValidateCodeMutation,
	useGenerateCodeMutation,
} = authApi;
