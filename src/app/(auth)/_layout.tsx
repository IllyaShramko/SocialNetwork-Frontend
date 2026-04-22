import { AuthHeader } from "@modules/auth";
import { COLORS } from "@shared/constants/colors";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function AuthLayout() {
	return (
		<SafeAreaView
			edges={["bottom"]}
			style={{ flex: 1, backgroundColor: COLORS.plum50 }}
		>
			<View style={{ flex: 1, backgroundColor: COLORS.plum50, }}>
				<AuthHeader />
				<KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 ,justifyContent: "center", alignItems: "center" }}>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name="register/step-one" />
						<Stack.Screen name="register/step-two" />
						<Stack.Screen name="login" />
					</Stack>
				</KeyboardAwareScrollView>
			</View>
		</SafeAreaView>
	);
}
