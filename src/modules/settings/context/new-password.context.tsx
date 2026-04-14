import { createContext, PropsWithChildren, useContext, useState } from "react";

interface NewPasswordContextContract {
	newPassword: string | null;
	setNewPassword: (newPassword: string | null) => void;
}

export const NewPasswordContext =
	createContext<null | NewPasswordContextContract>(null);

export function useNewPasswordContext() {
	const ctx = useContext(NewPasswordContext);
	if (!ctx) throw new Error("NewPasswordContext is not inside provider");
	return ctx;
}

export function NewPasswordContextProvider(props: PropsWithChildren) {
	const [newPassword, setNewPassword] = useState<string | null>(null);
	return (
		<NewPasswordContext
			value={{
				newPassword,
				setNewPassword,
			}}
			{...props}
		></NewPasswordContext>
	);
}
