import { baseApi } from "@shared/api/base-api";
import {
	Album,
	AlbumCredentials,
	AlbumUpdateCredentials,
	CodeGenerateCredentials,
	CodeGenerateResponse,
	DeleteArgs,
	Image,
	MutationImageArgs,
	Tag,
	UpdateAvatarCredentials,
	UpdatePasswordCredentials,
	UpdateSignatureCredentials,
	UpdateUserProfileCredentaials,
	UploadImagesArgs,
} from "./api.types";
import { User } from "@shared/api/types";

const settingsApi = baseApi
	.enhanceEndpoints({ addTagTypes: ["Albums"] })
	.injectEndpoints({
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
						console.log(body.avatar)
						return {
							url: "/users/me/avatar",
							body: form,
							method: "PATCH",
						};
					},
				}),
				updateSignature: builder.mutation<
					User,
					UpdateSignatureCredentials
				>({
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
				}),
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
				setNewPassword: builder.mutation<
					User,
					UpdatePasswordCredentials
				>({
					query: (body) => ({
						url: "/users/me/password",
						method: "PATCH",
						body,
					}),
				}),
				tags: builder.query<Tag[], void>({
					query() {
						return {
							url: "/album/tags",
						};
					},
				}),
				albums: builder.query<Album[], void>({
					query() {
						return {
							url: "/album/my",
						};
					},
					providesTags: ["Albums"],
				}),
				albumCreate: builder.mutation<Album, AlbumCredentials>({
					query: (body) => ({
						url: "/album",
						body,
						method: "POST",
					}),
					invalidatesTags: ["Albums"],
				}),
				albumUpdate: builder.mutation<Album, AlbumUpdateCredentials>({
					query: ({ id, ...body }) => ({
						url: `/album/${id}`,
						body,
						method: "PUT",
					}),
					invalidatesTags: ["Albums"],
				}),

				albumDelete: builder.mutation<Album, DeleteArgs>({
					query: ({ id }) => ({
						url: `/album/${id}`,
						method: "DELETE",
					}),
					invalidatesTags: ["Albums"],
				}),

				uploadImages: builder.mutation<Image[], UploadImagesArgs>({
					query: ({ albumId, images }) => {
						const form = new FormData();

						images.forEach((uri, index) => {
							form.append("images", {
								uri: uri,
								name: `${Date.now()}_${index}.jpeg`,
								type: "image/jpeg",
							} as any);
						});

						return {
							url: `/album/${albumId}/images`,
							body: form,
							method: "POST",
						};
					},
				}),
				deleteImage: builder.mutation<Image, MutationImageArgs>({
					query({ imageId, albumId }) {
						return {
							url: `/album/${albumId}/images/${imageId}`,
							method: "DELETE",
						};
					},
				}),
				changeVisibilityImage: builder.mutation<
					Image,
					MutationImageArgs
				>({
					query({ imageId, albumId }) {
						return {
							url: `/album/${albumId}/images/${imageId}`,
							method: "PATCH",
						};
					},
				}),
				deleteAvatar: builder.mutation<{ success: string }, DeleteArgs>({
					query({ id }) {
						return {
							url: `/users/me/avatars/${id}`,
							method: "DELETE"
						}
					},
				})
			};
		},
	});

export const {
	useUpdateAvatarMutation,
	useUpdateMutation,
	useUpdateSignatureMutation,
	usePasswordGenerateCodeMutation,
	useSetNewPasswordMutation,
	useTagsQuery,
	useLazyAlbumsQuery,
	useAlbumCreateMutation,
	useUploadImagesMutation,
	useDeleteImageMutation,
	useChangeVisibilityImageMutation,
	useAlbumUpdateMutation,
	useAlbumDeleteMutation,
	useDeleteAvatarMutation
} = settingsApi;
