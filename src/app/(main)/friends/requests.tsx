import { Container } from "@modules/friends";
import { useGetRequestsQuery } from "@modules/friends/api";
import { COLORS } from "@shared/constants/colors";
import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

export default function Page() {
	const [refreshing, setRefreshing] = useState(false);
	const { data: reqsData, refetch } = useGetRequestsQuery();

	const handleRefresh = useCallback(async () => {
		setRefreshing(true);
		try {
			await refetch()
				.unwrap()
				.catch(() => undefined);
		} finally {
			setRefreshing(false);
		}
	}, [refetch]);

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<ScrollView
				contentContainerStyle={{ gap: 8 }}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={handleRefresh}
					/>
				}
			>
				<Container
					name="Reqs"
					profiles={reqsData?.map((req) => req.fromUser)}
				/>
			</ScrollView>
		</View>
	);
}
