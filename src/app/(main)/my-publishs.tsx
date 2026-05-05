import { MyPostList } from "@modules/posts";
import { COLORS } from "@shared/constants/colors";
import { View } from "react-native";

export default function Page() {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.plum50 }}>
			<MyPostList />
		</View>
	);
}
