import { baseApi } from "@shared/api/base-api";
import { Friend, FriendRequestResponse, Profile, SmthWithIdInPath } from "./api.types";

const friendsApi = baseApi
	.enhanceEndpoints({ addTagTypes: ["Requests", "ForYouRecs", "Friends"] })
	.injectEndpoints({
		endpoints(builder) {
			return {
				getRequests: builder.query<FriendRequestResponse[], void>({
					query() {
						return {
							url: "/users/me/friends/requests",
						};
					},
					providesTags: ["Requests"],
				}),
				getForYouRecs: builder.query<Profile[], void>({
					query() {
						return {
							url: "/users/me/friends/recs",
						};
					},
					providesTags: ["ForYouRecs"],
				}),
				getFriends: builder.query<Friend[], void>({
					query() {
						return {
							url: "/users/me/friends",
						};
					},
					providesTags: ["Friends"],
				}),
				postAddRequest: builder.mutation<Profile, SmthWithIdInPath>({
					query(id) {
						return {
							url: `/users/me/friends/request/${id}`,
							method: "POST",
						};
					},
					invalidatesTags: ["Requests"],
				}),
				postAcceptRequest: builder.mutation<Profile, SmthWithIdInPath>({
					query(id) {
						return {
							url: `/users/me/friends/request/${id}`,
							method: "PUT",
						};
					},
					invalidatesTags: ["Requests"],
				}),
				postDeclineRequest: builder.mutation<Profile, SmthWithIdInPath>(
					{
						query(id) {
							return {
								url: `/users/me/friends/request/${id}`,
								method: "DELETE",
							};
						},
						invalidatesTags: ["Requests"],
					},
				),
				postDeleteFriend: builder.mutation<Profile, SmthWithIdInPath>({
					query(id) {
						return {
							url: `/users/me/friends/${id}`,
							method: "DELETE",
						};
					},
					invalidatesTags: ["Requests"],
				}),
				getUserById: builder.query<Profile, SmthWithIdInPath>({
					query(id) {
						return {
							url: `/users/${id}`,
							method: "GET",
						};
					},
				}),
			};
		},
	});

export const {
	useGetForYouRecsQuery,
	useGetFriendsQuery,
	useGetRequestsQuery,
	useGetUserByIdQuery,
	usePostAcceptRequestMutation,
	usePostAddRequestMutation,
	usePostDeclineRequestMutation,
	usePostDeleteFriendMutation,
} = friendsApi;
