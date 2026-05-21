import { baseApi } from "@shared/api/base-api";
import {
	FriendRequest,
	PostsByUserIdParams,
	ShortFriendShip,
	SmthWithIdInPath,
} from "./api.types";
import { Friend, Post, ProfileWithFullInfo, User } from "@shared/api/types";

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
				getForYouRecs: builder.query<User[], void>({
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
				postAddRequest: builder.mutation<
					ShortFriendShip,
					SmthWithIdInPath
				>({
					query({ id }) {
						return {
							url: `/friends/all/${id}`,
							method: "POST",
						};
					},
					invalidatesTags: ["Requests", "ForYouRecs"],
				}),
				postAcceptRequest: builder.mutation<
					ShortFriendShip,
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
					ShortFriendShip,
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
					ShortFriendShip,
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
				getPostsByUserId: builder.query<Post[], PostsByUserIdParams>({
					query({ id, page = 1, limit = 5 }) {
						return {
							url: `/posts?userId=${id}&pageNumber=${page}&limit=${limit}`,
							method: "GET",
						};
					},
					serializeQueryArgs: ({ endpointName, queryArgs }) =>
						`${endpointName}-${queryArgs.id}`,
					merge(currentCache, newItems, { arg }) {
						if (arg.page == null || arg.page === 1) {
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
							currentArg?.id !== previousArg?.id ||
							currentArg?.page !== previousArg?.page ||
							currentArg?.limit !== previousArg?.limit
						);
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
	useGetPostsByUserIdQuery,
} = friendsApi;
