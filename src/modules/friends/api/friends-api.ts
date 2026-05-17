import { baseApi } from "@shared/api/base-api";
import {
	Friend,
	FriendRequest,
	ShortFriend,
	ShortRequest,
	SmthWithIdInPath,
} from "./api.types";
import { ProfileWithFullInfo, ProfileWithUser } from "@shared/api/types";

const friendsApi = baseApi
	.enhanceEndpoints({ addTagTypes: ["Requests", "ForYouRecs", "Friends"] })
	.injectEndpoints({
		endpoints(builder) {
			return {
				getRequests: builder.query<FriendRequest[], void>({
					query() {
						return {
							url: "/friends/req",
						};
					},
					providesTags: ["Requests"],
				}),
				getForYouRecs: builder.query<ProfileWithUser[], void>({
					query() {
						return {
							url: "/friends/all",
						};
					},
					providesTags: ["ForYouRecs"],
				}),
				getFriends: builder.query<Friend[], void>({
					query() {
						return {
							url: "/friends/my",
						};
					},
					providesTags: ["Friends"],
				}),
				postAddRequest: builder.mutation<ShortFriend, SmthWithIdInPath>(
					{
						query({ id }) {
							return {
								url: `/friends/all/${id}`,
								method: "POST",
							};
						},
						invalidatesTags: ["Requests", "ForYouRecs"],
					},
				),
				postAcceptRequest: builder.mutation<
					ShortRequest,
					SmthWithIdInPath
				>({
					query({ id }) {
						return {
							url: `/friends/req/${id}`,
							method: "POST",
						};
					},
					invalidatesTags: ["Requests", "Friends"],
				}),
				postDeclineRequest: builder.mutation<
					ShortRequest,
					SmthWithIdInPath
				>({
					query({ id }) {
						return {
							url: `/friends/req/${id}`,
							method: "DELETE",
						};
					},
					invalidatesTags: ["Requests", "ForYouRecs"],
				}),
				postDeleteFriend: builder.mutation<
					ShortFriend,
					SmthWithIdInPath
				>({
					query({ id }) {
						return {
							url: `/friends/my/${id}`,
							method: "DELETE",
						};
					},
					invalidatesTags: ["Friends", "ForYouRecs"],
				}),
				getProfileById: builder.query<
					ProfileWithFullInfo,
					SmthWithIdInPath
				>({
					query({ id }) {
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
	useGetProfileByIdQuery,
	usePostAcceptRequestMutation,
	usePostAddRequestMutation,
	usePostDeclineRequestMutation,
	usePostDeleteFriendMutation,
} = friendsApi;
