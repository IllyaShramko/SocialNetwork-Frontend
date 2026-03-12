import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
    return (
        <View style= {{ flex: 1 }}>
            <Text>Login</Text>
            <Link href={"/register"}><Text>Go Register</Text></Link>
            <Link href={"/"}><Text>Go home</Text></Link>
        </View>
    )
}