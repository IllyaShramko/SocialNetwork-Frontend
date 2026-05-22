import { ContactList } from "@modules/chat/ui/contactList/ContactList";
import { COLORS } from "@shared/constants/colors";
import { View, Text } from "react-native";

export default function Page() {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.fog, paddingTop: 6 }}>
			{/* <Text>Чати</Text> */}
			<ContactList />
		</View>
	);
}
