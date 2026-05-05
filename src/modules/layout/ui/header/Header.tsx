import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./header.styles";
import { usePathname, useRouter } from "expo-router";
import { COLORS } from "@shared/constants/colors";
import { useUserContext } from "@modules/auth/context/user.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Images } from "@shared/ui/images";
import { Button } from "@shared/ui/button";
import { Icons } from "@shared/ui/icons";
import { useState } from "react";
import { PostCreateModal } from "../../@x/ui";

export function HomeHeader() {
	const { setToken, setUser } = useUserContext();
	const pathname = usePathname();
	const [visibleModal, SetVisibleModal] = useState<boolean>(false);
	const router = useRouter();
	return (
		<SafeAreaView edges={["top"]} style={{ backgroundColor: COLORS.white }}>
			<View style={styles.header}>
				<Images.LogoImage style={styles.logo} />
				<View style={styles.blockButtons}>
					{!pathname.includes("/friends") && (
						<Button
							variant="outline"
							iconLeft={<Icons.PlusIcon />}
							onPress={() => {
								SetVisibleModal(true);
							}}
						/>
					)}

					{!pathname.includes("/chats") && (
						<Button
							variant="outline"
							iconLeft={<Icons.SettingsIcon />}
							onPress={() => {
								router.push("/settings");
							}}
							style={
								pathname.includes("/settings") && {
									backgroundColor: COLORS.plum50,
								}
							}
						/>
					)}

					<Button
						variant="outline"
						iconLeft={<Icons.LogoutIcon />}
						onPress={() => {
							setToken("");
							setUser(null);
							AsyncStorage.removeItem("token");
							router.replace("/login");
						}}
					/>
				</View>
			</View>
			<PostCreateModal
				visible={visibleModal}
				onClose={() => {
					SetVisibleModal(false)
				}}
			/>
		</SafeAreaView>
	);
}
