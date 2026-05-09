import { ProfileWithUser } from "@shared/api/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface SelectedProfileContextContract {
	profile: ProfileWithUser | null;
	status: string | null;
	setUser: (user: ProfileWithUser | null) => void;
	setStatus: (status: string | null) => void;
}

export const SelectedProfileContext =
	createContext<null | SelectedProfileContextContract>(null);

export function useSelectedProfileContext() {
	const ctx = useContext(SelectedProfileContext);
	if (!ctx) throw new Error("SelectedProfileContext is not inside provider");
	return ctx;
}

export function SelectedProfileContextProvider(props: PropsWithChildren) {
	const [status, setStatus] = useState<string | null>(null);
	const [profile, setUser] = useState<ProfileWithUser | null>(null);
	return (
		<SelectedProfileContext
			value={{
				profile,
				status,
				setUser,
				setStatus,
			}}
			{...props}
		></SelectedProfileContext>
	);
}
