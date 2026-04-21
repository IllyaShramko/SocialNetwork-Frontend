import { HomeHeader } from "@modules/layout";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { typography } from "@shared/theme";
import { Icons } from "@shared/ui/icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MainLayout() {
	return (
		<View style={{ flex: 1 }}>
			<HomeHeader />
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarShowLabel: true,
					tabBarActiveTintColor: "#0D0D12",
					tabBarInactiveTintColor: "#0D0D12",
					tabBarStyle: styles.footer,
					tabBarLabelStyle: {
						fontSize: FONT_SIZE.defaultP,
						color: COLORS.blue,
						fontFamily: typography.medium.fontFamily,
					},
					sceneStyle: { backgroundColor: COLORS.fog },
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Головна",
						tabBarIcon: ({ focused }) => (
							<View style={styles.link}>
								{focused && <View style={styles.selected} />}
								<Icons.HomeIcon />
							</View>
						),
					}}
				/>
				<Tabs.Screen
					name="my-publishs"
					options={{
						title: "Мої публікації",
						tabBarIcon: ({ focused }) => (
							<View style={styles.link}>
								{focused && <View style={styles.selected} />}
								<Icons.GalaryIcon />
							</View>
						),
						tabBarItemStyle: {
							flex: 1.5,
							width: "auto",
						},
					}}
				/>
				<Tabs.Screen
					name="friends"
					options={{
						title: "Друзі",
						tabBarIcon: ({ focused }) => (
							<View style={styles.link}>
								{focused && <View style={styles.selected} />}
								<Icons.FriendsIcon />
							</View>
						),
					}}
				/>
				<Tabs.Screen
					name="chats"
					options={{
						title: "Чати",
						tabBarIcon: ({ focused }) => (
							<View style={styles.link}>
								{focused && <View style={styles.selected} />}
								<Icons.ChatsIcon />
							</View>
						),
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						href: null,
					}}
				/>
			</Tabs>
		</View>
	);
}
export const styles = StyleSheet.create({
	footer: {
		backgroundColor: COLORS.white,
		paddingHorizontal: 16,
		justifyContent: "space-between",
		alignItems: "center",
	},
	link: {
		gap: 6,
		padding: 8,
		paddingBottom: 4,
		alignItems: "center",
	},
	selected: {
		position: "absolute",
		top: -3.5,
		width: "500%",
		height: 2,
		backgroundColor: COLORS.blue,
	},
});
