import type { Profile } from "@shared/api/types";
export type { Profile };

export interface SmthWithIdInPath {
	id: number;
}

export type FriendRequestResponse = {
	toProfile: Profile;
	fromProfileId: number;
	toProfileId: number;
	createdAt: Date;
	id: number;
};

export type Friend = {
	id: number;
	fromProfileId: number;
	toProfileId: number;
	toProfile: Profile;
	fromProfile: Profile;
};
