import { SubHeader } from "@modules/layout";
import { COLORS } from "@shared/constants/colors";
import { SubLink } from "@shared/ui";
import { Stack, usePathname, useRouter } from "expo-router";
import { View } from "react-native";

export default function SettingsLayout() {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<View style={{ flex: 1 }}>
			<SubHeader>
				<SubLink
					text="Особиста інформація"
					active={pathname === "/settings"}
					onPress={() => {
						pathname !== "/settings" && router.push("/settings");
					}}
				/>
				<SubLink
					text="Альбоми"
					active={pathname.includes("/albums")}
					onPress={() => {
						!pathname.includes("/albums") &&
							router.push("/settings/albums");
					}}
				/>
			</SubHeader>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: COLORS.fog },
				}}
			>
				<Stack.Screen name="albums" />
				<Stack.Screen name="index" />
			</Stack>
		</View>
	);
}
