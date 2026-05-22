import { DirectPreviewChat } from "@modules/chat/api/api.types";
import { useGetDirectsQuery } from "../../api";
import { MainContainer } from "../mainContainer";
import { Icons } from "@shared/ui/icons";
import { GroupItem } from "../groupItem";
import { COLORS } from "@shared/constants/colors";

export function DirectChats() {
	const { data, isLoading, isFetching } = useGetDirectsQuery();
	return (
		<MainContainer<DirectPreviewChat>
			icon={<Icons.ChatsIcon color={COLORS.blue50} />}
			name="Повідомлення"
			data={data}
			isLoading={isLoading || isFetching}
			onSearch={(value) => {
				console.log(value);
			}}
			renderItem={({ item }) => <GroupItem chat={item} />}
		/>
	);
}
