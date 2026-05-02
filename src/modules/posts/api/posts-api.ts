import { baseApi } from "@shared/api/base-api";
import { Post } from "@shared/api/types";

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
			};
		},
	});

export const { useGetPostsQuery } = postApi;
