import { Container } from "@modules/friends";
import { useGetRequestsQuery } from "@modules/friends/api";
import { COLORS } from "@shared/constants/colors";
import { View } from "react-native";

export default function Page() {
	const { data: reqsData } = useGetRequestsQuery();
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<Container name="Reqs" profiles={reqsData?.map((req) => req.fromProfile)} />
		</View>
	);
}
