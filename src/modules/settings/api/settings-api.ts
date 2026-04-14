import { baseApi } from "@shared/api/base-api";
import {
	CodeGenerateCredentials,
	CodeGenerateResponse,
	UpdateAvatarCredentials,
	UpdatePasswordCredentials,
	UpdateSignatureCredentials,
	UpdateUserProfileCredentaials,
} from "./api.types";
import { User } from "@modules/auth/models/types";

const settingsApi = baseApi.injectEndpoints({
	endpoints(builder) {
		return {
			updateAvatar: builder.mutation<User, UpdateAvatarCredentials>({
				query: (body) => {
					const form = new FormData();
					form.append("avatar", {
						uri: body.avatar,
						name: `${Date.now()}.jpeg`,
						type: "image/jpeg",
					} as any);

					return {
						url: "/users/me/avatar",
						body: form,
						method: "PATCH",
					};
				},
			}),
			updateSignature: builder.mutation<User, UpdateSignatureCredentials>(
				{
					query: (body) => {
						const form = new FormData();
						form.append("signature", {
							uri: body.signature,
							name: `signature_${Date.now()}.png`,
							type: "image/png",
						} as any);

						return {
							url: "/users/me/signature",
							body: form,
							method: "PATCH",
						};
					},
				},
			),
			update: builder.mutation<User, UpdateUserProfileCredentaials>({
				query: (body) => ({
					url: "/users/me/profile",
					body,
					method: "PATCH",
				}),
			}),
			passwordGenerateCode: builder.mutation<
				CodeGenerateResponse,
				CodeGenerateCredentials
			>({
				query: (body) => ({
					url: "/users/me/password-reset-code",
					method: "POST",
					body,
				}),
			}),
			setNewPassword: builder.mutation<User, UpdatePasswordCredentials>({
				query: (body) => ({
					url: "/users/me/password",
					method: "PATCH",
					body,
				}),
			}),
		};
	},
});

export const {
	useUpdateAvatarMutation,
	useUpdateMutation,
	useUpdateSignatureMutation,
	usePasswordGenerateCodeMutation,
	useSetNewPasswordMutation,
} = settingsApi;
