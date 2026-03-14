import { HomeHeader } from "@modules/layout";
import { COLORS } from "@shared/constants/colors";
import { FONT_SIZE } from "@shared/constants/font-size";
import { Icons } from "@shared/ui";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function MainLayout() {

    return (
        <Tabs screenOptions={{ 
            header: () => <HomeHeader />,
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#0D0D12', 
            tabBarInactiveTintColor: '#0D0D12',
            tabBarStyle: styles.footer,
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 500,
            },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Головна',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.link}>
                            {focused && <View style={styles.selected} />}
                            <Icons.HomeIcon />
                        </View>
                    ),
                    tabBarLabelStyle: styles.text
                }}
            />
            <Tabs.Screen
                name="my-publishs"
                options={{
                    title: 'Мої публікації',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.link}>
                            {focused && <View style={styles.selected} />}
                            <Icons.GalaryIcon />
                        </View>
                    ),
                    tabBarItemStyle: {
                        flex: 1.2,
                        width: "auto"
                    },
                    tabBarLabelStyle: styles.text
                }}
            />
            <Tabs.Screen
                name="friends/index"
                options={{
                    title: 'Друзі',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.link}>
                            {focused && <View style={styles.selected} />}
                            <Icons.FriendsIcon />
                        </View>
                    ),
                    tabBarLabelStyle: styles.text
                }}
            />
            <Tabs.Screen
                name="chats/index"
                options={{
                    title: 'Чати',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.link}>
                            {focused && <View style={styles.selected} />}
                            <Icons.ChatsIcon />
                        </View>
                    ),
                    tabBarLabelStyle: styles.text
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    )
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
        alignItems: "center"
    },
    text: {
        fontSize: FONT_SIZE.defaultP,
        fontWeight: 500,
        color: COLORS.blue
    },
    selected: {
        position: "absolute",
        top: 0,
        width: "500%",
        height: 2,
        backgroundColor: COLORS.blue
    }
})
 
