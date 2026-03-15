import { COLORS } from "@shared/constants/colors";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync(); // Set loading screen while loading fonts

export default function RootLayout() {

    const [loaded, error] = useFonts({
        'GTWalsheim-Black': require('../assets/fonts/GTWalsheimPro-Black.ttf'),
        'GTWalsheim-Bold': require('../assets/fonts/GTWalsheimPro-Bold.ttf'),
        'GTWalsheim-Medium': require('../assets/fonts/GTWalsheimPro-Medium.ttf'),
        'GTWalsheim-Regular': require('../assets/fonts/GTWalsheimPro-Regular.ttf'),
    });

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

    return (
        <SafeAreaProvider style= {{ backgroundColor: COLORS.plum50 }}>
            <Slot />
        </SafeAreaProvider>
    )
}