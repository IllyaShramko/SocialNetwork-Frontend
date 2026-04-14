import { ProfileCard } from "../profile-card";
import { styles } from "./card.styles";
import { MainCard } from "../main-card";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SignatureNameCard } from "../signature-name";

export function Card() {
	return (
		<KeyboardAwareScrollView
			style={styles.container}
			contentContainerStyle={styles.child}
		>
			<ProfileCard />
			<MainCard />
			<SignatureNameCard />
		</KeyboardAwareScrollView>
	);
}
