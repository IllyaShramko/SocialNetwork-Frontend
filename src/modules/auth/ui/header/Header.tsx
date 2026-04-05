import { Images } from "@shared/ui";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./header.styles";
import { COLORS } from "@shared/constants/colors";

export function AuthHeader() {
	return (
		<SafeAreaView edges={["top"]} style={{ backgroundColor: COLORS.white }}>
			<View style={styles.header}>
				<Images.LogoImage style={styles.logo} />
			</View>
		</SafeAreaView>
	);
}
