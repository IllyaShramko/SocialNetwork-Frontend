import { DirectChats } from "@modules/chat/ui/directChats/DirectChats";
import { COLORS } from "@shared/constants/colors";
import { View } from "react-native";

export default function Page() {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.fog, paddingTop: 6 }}>
			<DirectChats />
		</View>
	);
}
