import { HomeHeader } from "@modules/layout";
import { HomeFooter } from "@modules/layout/ui";
import { Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
    const [currentPage, setCurrentPage] = useState<string>("home")
    return (
        <SafeAreaProvider>
            <View style= {{ flex: 1 }}>
                <HomeHeader 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                </Stack>
                <HomeFooter 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </View>
        </SafeAreaProvider>
    )
}