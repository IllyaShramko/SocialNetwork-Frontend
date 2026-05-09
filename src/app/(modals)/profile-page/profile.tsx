import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Text, TouchableOpacity, View } from "react-native";
import { Icons } from "@shared/ui/icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ProfilePreview } from "@modules/friends";

export default function CreateContactStepOne() {
	return (
		<View style={{ flex: 1, paddingVertical: 8 }}>
            {/* <TouchableOpacity onPress={() => {
                if (router.canGoBack()) router.back()
            }}>
                <Text>{"<-- Back"}</Text>
            </TouchableOpacity>
            <Text>Hello world!</Text> */}
            <ProfilePreview />
		</View>
	);
}
