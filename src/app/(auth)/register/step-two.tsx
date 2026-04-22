import { RegistrationStepTwo } from "@modules/auth";
import { COLORS } from "@shared/constants/colors";
import { View } from "react-native";

export default function Page() {
	return (
		<View style={{ backgroundColor: COLORS.plum50, flex: 1 ,justifyContent: "center" }}>
			<RegistrationStepTwo />
		</View>
	);
}
