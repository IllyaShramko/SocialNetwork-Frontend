import { GroupChats } from "@modules/chat/ui/groupChats/GroupChats";
import { COLORS } from "@shared/constants/colors";
import { View, Text } from "react-native";

export default function Page() {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<GroupChats />
		</View>
	);
}
