import { MainContainer } from "../mainContainer";
import { Icons } from "@shared/ui/icons";
import { COLORS } from "@shared/constants/colors";
import { useGetFriendsQuery } from "@modules/friends/api";
import { Friend } from "@shared/api/types";
import { ContactItem } from "./contactItem";

export function ContactList() {
	const { data, isLoading, isFetching } = useGetFriendsQuery();
	return (
		<MainContainer<Friend>
			icon={<Icons.FriendsIcon color={COLORS.blue50} />}
			name="Контакти"
			data={data}
			isLoading={isLoading || isFetching}
			onSearch={(value) => {
				console.log(value);
			}}
			renderItem={({ item }) => <ContactItem contact={item} />}
		/>
	);
}
