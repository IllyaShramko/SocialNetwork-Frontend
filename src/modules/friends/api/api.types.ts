import type { Profile, User } from "@shared/api/types";
export type { Profile };

export interface SmthWithIdInPath {
	id: number;
}

export interface PostsByUserIdParams extends SmthWithIdInPath {
	page?: number;
	limit?: number;
}

export type FriendRequest = {
	id: number;
	fromUser: User;
	fromUserId: number;
	toUserId: number;
	createdAt: Date;
};

export type ShortFriendShip = {
	id: number;
	status: "pending" | "accepted";
	fromUserId: number;
	toUserId: number;
	createdAt: Date;
};
