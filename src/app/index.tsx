import { useUserContext } from "@modules/auth/context/user.context";
import { Redirect } from "expo-router";

export default function Page() {
	const { token } = useUserContext();
	if (token) {
        return <Redirect href={"/(main)"} />;
	}
    return <Redirect href={"/login"} />;
}
