import { ScrollView } from "react-native";
import { Container } from "../container";

export function AllContainer() {
	return (
		<ScrollView contentContainerStyle={{ gap: 8 }}>
			<Container name="Reqs" redirectTo="/friends/requests" />
			<Container name="Recs" redirectTo="/friends/recs" />
			<Container name="AllF" redirectTo="/friends/all" />
		</ScrollView>
	);
}
