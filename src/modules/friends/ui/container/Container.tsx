import { Text, TouchableOpacity, View } from "react-native";
import { ContainerProps } from "./container.types";
import { styles } from "./container.styles";
import { useRouter } from "expo-router";
import { Card } from "../card";
import { Button } from "@shared/ui/button";
import { useSelectedProfileContext } from "../../context/friends.context";

export function Container(props: ContainerProps) {
	const { name, redirectTo, profiles } = props;
	const { setStatus } = useSelectedProfileContext();
	const router = useRouter();
	async function handleClick(id: number) {
		setStatus(name);
		router.push({
			pathname: "/profile-page/[id]",
			params: { id },
		});
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>
					{name === "Reqs"
						? "Запити"
						: name === "Recs"
							? "Рекомендації"
							: "Всі друзі"}
				</Text>
				{redirectTo && (
					<TouchableOpacity
						onPress={() => {
							router.push(redirectTo);
						}}
					>
						<Text style={styles.btnText}>Дивитись всі</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={styles.body}>
				{profiles && profiles.length !== 0 ? (
					redirectTo ? (
						profiles?.slice(0, 2).map((user) => (
							<Card
								key={user.id}
								user={user}
								children={
									name === "Reqs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Підтвердити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
											<Button
												variant="outline"
												text="Видалити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
										</View>
									) : name === "Recs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Додати"
												onPress={() =>
													handleClick(user.id)
												}
											/>
											<Button
												variant="outline"
												text="Видалити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
										</View>
									) : (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Повідомлення"
												onPress={() =>
													handleClick(user.id)
												}
											/>
											<Button
												variant="outline"
												text="Видалити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
										</View>
									)
								}
							/>
						))
					) : (
						profiles?.map((user) => (
							<Card
								key={user.id}
								user={user}
								children={
									name === "Reqs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Підтвердити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
											<Button
												variant="outline"
												text="Видалити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
										</View>
									) : name === "Recs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Додати"
												onPress={() =>
													handleClick(user.id)
												}
											/>
											<Button
												variant="outline"
												text="Видалити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
										</View>
									) : (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Повідомлення"
												onPress={() =>
													handleClick(user.id)
												}
											/>
											<Button
												variant="outline"
												text="Видалити"
												onPress={() =>
													handleClick(user.id)
												}
											/>
										</View>
									)
								}
							/>
						))
					)
				) : (
					<Text style={styles.placeholderText}>
						Тут поки що нічого немає...
					</Text>
				)}
			</View>
		</View>
	);
}
