import { View } from "react-native";
import { ProfilePreview } from "@modules/friends";

export default function CreateContactStepOne() {
	return (
		<View style={{ flex: 1, paddingVertical: 8 }}>
			<ProfilePreview />
		</View>
	);
}
