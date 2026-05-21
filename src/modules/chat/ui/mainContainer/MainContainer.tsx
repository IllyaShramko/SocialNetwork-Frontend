import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { MainContainerProps } from "./main-container.types";
import { Input } from "@shared/ui/input";
import { Icons } from "@shared/ui/icons";
import { styles } from "./main-container.styles";
import { COLORS } from "@shared/constants/colors";

export function MainContainer<T extends { id: number }>(
	props: MainContainerProps<T>,
) {
	const { icon, name, data, renderItem, onSearch, isLoading } = props;
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>{icon}</View>
				<Text style={styles.headerText}>{name}</Text>
			</View>
			<View style={styles.searchContainer}>
				<Input
					accessable={true}
					iconLeft={<Icons.SearchIcon color={COLORS.blue50} />}
					placeholder="Пошук"
					onChangeText={onSearch}
				/>
			</View>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
			/>
		</View>
	);
}
