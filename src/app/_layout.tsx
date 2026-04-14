import { useLazyMeQuery, useMeQuery } from "@modules/auth/api";
import {
	UserContextProvider,
	useUserContext,
} from "@modules/auth/context/user.context";
import { NewPasswordContextProvider } from "@modules/settings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { baseApi } from "@shared/api/base-api";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync(); // Set loading screen while loading fonts

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<ApiProvider api={baseApi}>
				<UserContextProvider>
					<NewPasswordContextProvider>
						<KeyboardProvider>
							<AppStack />
						</KeyboardProvider>
					</NewPasswordContextProvider>
				</UserContextProvider>
			</ApiProvider>
		</SafeAreaProvider>
	);
}

function AppStack() {
	const [loaded, error] = useFonts({
		"GTWalsheim-Black": require("../assets/fonts/GTWalsheimPro-Black.ttf"),
		"GTWalsheim-Bold": require("../assets/fonts/GTWalsheimPro-Bold.ttf"),
		"GTWalsheim-Medium": require("../assets/fonts/GTWalsheimPro-Medium.ttf"),
		"GTWalsheim-Regular": require("../assets/fonts/GTWalsheimPro-Regular.ttf"),
	});

	const { token, setUser, setToken } = useUserContext();
	const [meQuery, { data }] = useLazyMeQuery();

	useEffect(() => {
		if (token) {
			AsyncStorage.setItem("token", token).then(() => {
				meQuery()
					.unwrap()
					.then((data) => {
						setUser(data);
					});
			});
		}
	}, [token]);

	useEffect(() => {
		async function loadToken() {
			const localToken = await AsyncStorage.getItem("token");
			if (localToken) {
				setToken(localToken);
			}
		}
		loadToken();
	}, []);

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded && !error) {
		return null;
	}

	return <Slot />;
}
