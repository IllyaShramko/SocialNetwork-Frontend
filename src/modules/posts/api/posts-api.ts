import { baseApi } from "@shared/api/base-api";
import { Post } from "@shared/api/types";
import { PostCreateDto, PostsPaginationParams } from "./api.types";

const postApi = baseApi
	.enhanceEndpoints({ addTagTypes: ["Posts"] })
	.injectEndpoints({
		endpoints(builder) {
			return {
				getPosts: builder.query<Post[], PostsPaginationParams | void>({
					query(args) {
						const { page = 1, limit = 5 } = args ?? {};
						return {
							url: `/posts?pageNumber=${page}&limit=${limit}`,
						};
					},
					serializeQueryArgs: ({ endpointName }) => endpointName,
					merge(currentCache, newItems, { arg }) {
						if (!arg || arg.page == null || arg.page === 1) {
							return newItems;
						}

						const existingIds = new Set(
							currentCache.map((post) => post.id),
						);
						newItems.forEach((post) => {
							if (!existingIds.has(post.id)) {
								currentCache.push(post);
							}
						});
					},
					forceRefetch({ currentArg, previousArg }) {
						return (
							currentArg?.page !== previousArg?.page ||
							currentArg?.limit !== previousArg?.limit
						);
					},
					providesTags: ["Posts"],
				}),
				getMyPosts: builder.query<Post[], PostsPaginationParams | void>({
					query(args) {
						const { page = 1, limit = 5 } = args ?? {};
						return {
							url: `/posts/my?page=${page}&limit=${limit}`,
						};
					},
					serializeQueryArgs: ({ endpointName }) => endpointName,
					merge(currentCache, newItems, { arg }) {
						if (!arg || arg.page == null || arg.page === 1) {
							return newItems;
						}

						const existingIds = new Set(
							currentCache.map((post) => post.id),
						);
						newItems.forEach((post) => {
							if (!existingIds.has(post.id)) {
								currentCache.push(post);
							}
						});
					},
					forceRefetch({ currentArg, previousArg }) {
						return (
							currentArg?.page !== previousArg?.page ||
							currentArg?.limit !== previousArg?.limit
						);
					},
					providesTags: ["Posts"],
				}),
				createPost: builder.mutation<Post, PostCreateDto>({
					query(body) {
						const form = new FormData();
						form.append("title", body.title);
						form.append("topic", body.topic);
						form.append("content", body.content);
						body.tagIds?.forEach((tag) => {
							form.append("tagIds", `${tag}`);
						});

						body.images?.forEach(({ uri }) => {
							form.append("images", {
								uri,
								name: `${Date.now()}.jpeg`,
								type: "image/jpeg",
							} as any);
						});
						return {
							url: "/posts",
							body: form,
							method: "POST",
						};
					},
					invalidatesTags: ["Posts"],
				}),
			};
		},
	});

export const { useGetPostsQuery, useCreatePostMutation, useGetMyPostsQuery } =
	postApi;
