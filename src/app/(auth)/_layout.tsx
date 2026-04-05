import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { AuthHeader } from "@modules/auth";
import { COLORS } from "@shared/constants/colors";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
export default function AuthLayout() {
	return (
		<SafeAreaView edges={["bottom"]} style={{ flex: 1., backgroundColor: COLORS.plum50 }}>
			<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
				<AuthHeader />
				<View style={{ flex: 1, marginTop: 39, alignContent: "center" }}>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name="register/step-one" />
						<Stack.Screen name="register/step-two" />
						<Stack.Screen name="login" />
					</Stack>
				</View>
			</View>
		</SafeAreaView>
	);
}
