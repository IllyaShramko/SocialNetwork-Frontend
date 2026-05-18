import { createContext, PropsWithChildren, useContext, useState } from "react";

interface SelectedProfileContextContract {
	status: string | null;
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
	return (
		<SelectedProfileContext
			value={{
				status,
				setStatus,
			}}
			{...props}
		></SelectedProfileContext>
	);
}
