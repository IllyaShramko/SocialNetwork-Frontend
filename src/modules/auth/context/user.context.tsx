import { createContext, PropsWithChildren, useContext, useState } from "react";
import { User } from "../models/types";

interface UserContextContract {
	token: string | null;
	user: User | null;
	isAuth: boolean;
	setToken: (token: string | null) => void;
	setUser: (user: User | null) => void;
}

export const UserContext = createContext<null | UserContextContract>(null);

export function useUserContext() {
	const ctx = useContext(UserContext);
	if (!ctx) throw new Error("UserContext is not inside provider");
	return ctx;
}

export function UserContextProvider(props: PropsWithChildren) {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<User | null>(null);
	return (
		<UserContext
			value={{
				token,
				user,
				isAuth: !!user,
				setToken,
				setUser,
			}}
			{...props}
		></UserContext>
	);
}