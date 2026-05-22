import {
	DirectPreviewChat,
	GroupPreviewChat,
} from "@modules/chat/api/api.types";
import { useGetGroupsQuery } from "../../api";
import { MainContainer } from "../mainContainer";
import { Icons } from "@shared/ui/icons";
import { GroupItem } from "../groupItem";
import { COLORS } from "@shared/constants/colors";

export function GroupChats() {
	const { data, isLoading, isFetching } = useGetGroupsQuery();

	return (
		<MainContainer<GroupPreviewChat>
			icon={<Icons.ChatsIcon color={COLORS.blue50} />}
			name="Групові чати"
			data={data}
			isLoading={isLoading || isFetching}
			onSearch={(value) => {
				console.log(value);
			}}
			renderItem={({ item }) => (
				<GroupItem chat={item as DirectPreviewChat} />
			)}
		/>
	);
}
