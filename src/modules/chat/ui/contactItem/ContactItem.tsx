import { Text, View } from "react-native";
import { ContactItemProps } from "./contact-item.types";
import { useUserContext } from "@modules/auth/context/user.context";

export function ContactItem(props: ContactItemProps) {
	const { user } = useUserContext();
	const { contact } = props;
	return (
		<View>
			<Text>
				{user?.id === contact.fromUserId
					? contact.toUser.profile.pseudonym
					: contact.fromUser.profile.pseudonym}
			</Text>
		</View>
	);
}
