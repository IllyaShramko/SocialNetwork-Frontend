import { Button, Icons, Images } from "@shared/ui";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./header.styles";
import { useRouter } from "expo-router";
import { HeaderProps } from "./header.types";
import { COLORS } from "@shared/constants/colors";


export function HomeHeader(props: HeaderProps) {
    const {setCurrentPage, currentPage} = props
    const router = useRouter();
    return (
        <SafeAreaView edges={["top"]}>
            <View style={styles.header}>
			    <Images.LogoImage style={styles.logo} />
                <View style={styles.blockButtons}>
                    <Button 
                        variant="outline"
                        iconLeft= {<Icons.PlusIcon />}
                        onPress={() => {
                        }}
                    />
                    <Button 
                        variant="outline"
                        iconLeft= {<Icons.SettingsIcon />}
                        onPress={() => {
                            router.push("/settings")
                            setCurrentPage("settings")
                        }}
                        style={currentPage === "settings" && { backgroundColor: COLORS.plum50 }}
                    />
                    <Button 
                        variant="outline"
                        iconLeft= {<Icons.LogoutIcon />}
                        onPress={() => {
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}