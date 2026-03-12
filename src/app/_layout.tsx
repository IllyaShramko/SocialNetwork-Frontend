import { HomeHeader } from "@modules/layout";
import { HomeFooter } from "@modules/layout/ui";
import { Stack, usePathname, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
    const segments = useSegments();
    const [currentPage, setCurrentPage] = useState<string>("home")

    useEffect(() => {
        if (segments[0] === "(auth)") {
            setCurrentPage("auth");
        } else if (!segments[0]) {
            setCurrentPage("home");
        }
    }, [segments]);
    
    return (
        <SafeAreaProvider>
            <View style= {{ flex: 1 }}>
                {
                    currentPage !== "auth"
                    ? <HomeHeader 
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    : null
                }
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="my-publishs" />
                    <Stack.Screen name="settings" />
                    <Stack.Screen name="friends/index" />
                    <Stack.Screen name="chats/index" />
                    <Stack.Screen name="(auth)" />

                </Stack>
                {
                    currentPage !== "auth"
                    ? <HomeFooter 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    />
                    : null
                }
                
            </View>
        </SafeAreaProvider>
    )
}