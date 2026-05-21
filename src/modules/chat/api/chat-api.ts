import { baseApi } from "@shared/api/base-api";
import { DirectPreviewChat, GroupPreviewChat } from "./api.types";
import { Friend } from "@shared/api/types";

const chatApi = baseApi.injectEndpoints({
	endpoints(builder) {
		return {
			getGroups: builder.query<GroupPreviewChat[], void>({
				query() {
					return {
						url: "/chats/groups",
					};
				},
			}),
			getDirects: builder.query<DirectPreviewChat[], void>({
				query() {
					return {
						url: "/chats/direct",
					};
				},
			}),
			getContacts: builder.query<Friend[], void>({
				query() {
					return {
						url: "/friends/my",
					};
				},
			}),
		};
	},
});

export const { useGetDirectsQuery, useGetContactsQuery, useGetGroupsQuery } =
	chatApi;
