export type User = {
	id: number;
	email: string;
	username: string | null;
	firstName: string | null;
	surname: string | null;
	avatarUrl: string | null;
	birthday: Date | null;
	signature: string | null;
	isActive: boolean;
};
