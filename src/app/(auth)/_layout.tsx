import { AuthHeader } from "@modules/auth";
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface AuthLayoutProps {
    setCurrentPage: (value: string) => void,
    currentPage: string
}

export default function AuthLayout(props: AuthLayoutProps) {
    const {setCurrentPage, currentPage} = props
    return (
        <SafeAreaProvider>
            <View style= {{ flex: 1 }}>
                <Stack screenOptions={{ header: AuthHeader}}>
                    <Stack.Screen name="login" />
                    <Stack.Screen name="register" />
                </Stack>
            </View>
        </SafeAreaProvider>
    )
}