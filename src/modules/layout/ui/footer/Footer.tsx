import { Icons } from "@shared/ui";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./footer.styles";
import { useRouter } from "expo-router";
import { FooterProps } from "./footer.types";


export function HomeFooter(props: FooterProps) {
    const {setCurrentPage, currentPage} = props
    const router = useRouter();
    return (
        <SafeAreaView edges={["bottom"]}>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.link, currentPage === "home" && styles.selected]} 
                    onPress={() => {
                        router.push("/")
                        setCurrentPage("home")
                    }}
                >
                    <Icons.HomeIcon />
                    <Text style={styles.text}>Головна</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.link, currentPage === "my-publishs" && styles.selected]}
                    onPress={() => {
                        router.push("/my-publishs")
                        setCurrentPage("my-publishs")
                    }}
                >
                    <Icons.GalaryIcon />
                    <Text style={styles.text}>Мої публікації</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.link, currentPage === "friends" && styles.selected]}
                    onPress={() => {
                        router.push("/friends")
                        setCurrentPage("friends")
                    }}
                >
                    <Icons.FriendsIcon />
                    <Text style={styles.text}>Друзі</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.link, currentPage === "chats" && styles.selected]}
                    onPress={() => {
                        router.push("/chats")
                        setCurrentPage("chats")
                    }}
                >
                    <Icons.ChatsIcon />
                    <Text style={styles.text}>Чати</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}