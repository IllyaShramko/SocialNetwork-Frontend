import type { Profile, ProfileWithUser } from "@shared/api/types";
export type { Profile };

export interface SmthWithIdInPath {
	id: number;
}

export type FriendRequest = {
	id: number;
	fromProfile: ProfileWithUser;
	fromProfileId: number;
	toProfileId: number;
	createdAt: Date;
};

export type Friend = {
	id: number;
	fromProfileId: number;
	toProfileId: number;
	toProfile: ProfileWithUser;
	fromProfile: ProfileWithUser;
};

export type ShortFriend = {
	id: number;
	fromProfileId: number;
	toProfileId: number;
};

export type ShortRequest = {
	id: number;
	fromProfileId: number;
	toProfileId: number;
	createdAt: Date;
};
