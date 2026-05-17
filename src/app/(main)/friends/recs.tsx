import { Container } from "@modules/friends";
import { useGetForYouRecsQuery } from "@modules/friends/api";
import { COLORS } from "@shared/constants/colors";
import { View } from "react-native";

export default function Page() {
	const { data: recsData } = useGetForYouRecsQuery();
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<Container name="Recs" profiles={recsData} />
		</View>
	);
}
