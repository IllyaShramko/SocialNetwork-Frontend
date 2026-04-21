import { SubHeader } from "@modules/layout";
import { COLORS } from "@shared/constants/colors";
import { Icons } from "@shared/ui/icons";
import { Link } from "@shared/ui/link";
import { Stack, usePathname, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function SettingsLayout() {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<View style={styles.header}>
				<Link
					text="Контакти"
					selected={pathname === "/chats"}
					icon={<Icons.FriendsIcon />}
					onPress={() => {
						pathname !== "/chats" && router.push("/chats");
					}}
				/>
				<Link
					text="Повідомлення"
					selected={pathname.includes("/messages")}
					icon={<Icons.ChatsIcon />}
					onPress={() => {
						!pathname.includes("/messages") &&
							router.push("/chats/messages");
					}}
				/>
				<Link
					text="Групові чати"
					selected={pathname.includes("/groups")}
					icon={<Icons.ChatsIcon />}
					onPress={() => {
						!pathname.includes("/groups") &&
							router.push("/chats/groups");
					}}
				/>
			</View>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: COLORS.fog },
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="messages" />
				<Stack.Screen name="groups" />
			</Stack>
		</View>
	);
}
export const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		backgroundColor: COLORS.white,
		paddingHorizontal: 16,
		paddingVertical: 8,
		justifyContent: "space-between",
		alignItems: "center",
	},
});
