import { HomeHeader } from "@modules/layout";
import { Stack } from "expo-router";

export default function ModalLayout() {
	return (
		<Stack
			screenOptions={{
				presentation: "fullScreenModal",
			}}
		>
			<Stack.Screen
				name="profile-page/profile"
				options={{
					header: () => <HomeHeader />,
					animation: "slide_from_bottom",
				}}
			/>
		</Stack>
	);
}
