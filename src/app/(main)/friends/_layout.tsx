import { SubHeader } from "@modules/layout";
import { COLORS } from "@shared/constants/colors";
import { SubLink } from "@shared/ui";
import { Stack, usePathname, useRouter } from "expo-router";
import { View } from "react-native";

export default function SettingsLayout() {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<SubHeader>
				<SubLink
					text="Головна"
					active={pathname === "/friends"}
					onPress={() => {
						pathname !== "/friends" && router.push("/friends");
					}}
				/>
				<SubLink
					text="Запити"
					active={pathname.includes("/requests")}
					onPress={() => {
						!pathname.includes("/requests") &&
							router.push("/friends/requests");
					}}
				/>
				<SubLink
					text="Рекомендації"
					active={pathname.includes("/recs")}
					onPress={() => {
						!pathname.includes("/recs") &&
							router.push("/friends/recs");
					}}
				/>
				<SubLink
					text="Всі друзі"
					active={pathname.includes("/friends/all")}
					onPress={() => {
						!pathname.includes("/friends/all") &&
							router.push("/friends/all");
					}}
				/>
			</SubHeader>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: COLORS.fog },
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="requests" />
				<Stack.Screen name="recs" />
				<Stack.Screen name="all" />
			</Stack>
		</View>
	);
}
