import { baseApi } from "@shared/api/base-api";
import { Post } from "@shared/api/types";
import { PostCreateDto } from "./api.types";

const postApi = baseApi
	.enhanceEndpoints({ addTagTypes: ["Posts"] })
	.injectEndpoints({
		endpoints(builder) {
			return {
				getPosts: builder.query<Post[], void>({
					query() {
						return {
							url: "/posts",
						};
					},
					providesTags: ["Posts"],
				}),
				getMyPosts: builder.query<Post[], void>({
					query() {
						return {
							url: "/posts/my",
						};
					},
					providesTags: ["Posts"],
				}),
				createPost: builder.mutation<Post, PostCreateDto>({
					query(body) {
						const form = new FormData();
						console.log(body)
						form.append("title", body.title);
						form.append("topic", body.topic);
						form.append("content", body.content);
						body.tagIds?.forEach((tag) => {
							form.append("tagIds", `${tag}`);
						});

						body.images?.forEach((image) => {
							console.log(image, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
							form.append("images", {
								uri: image,
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
