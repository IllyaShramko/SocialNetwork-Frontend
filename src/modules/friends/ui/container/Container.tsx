import { Text, TouchableOpacity, View } from "react-native";
import { ContainerProps } from "./container.types";
import { styles } from "./container.styles";
import { useRouter } from "expo-router";
import { Card } from "../card";
import { Button } from "@shared/ui/button";

export function Container(props: ContainerProps) {
	const { name, redirectTo, profiles } = props;
	const router = useRouter();

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
						profiles?.slice(0, 2).map((profile) => (
							<Card
								key={profile.id}
								profile={profile}
								status={name}
								children={
									name === "Reqs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Підтвердити"
											/>
											<Button
												variant="outline"
												text="Видалити"
											/>
										</View>
									) : name === "Recs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Додати"
											/>
											<Button
												variant="outline"
												text="Видалити"
											/>
										</View>
									) : (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Повідомлення"
											/>
											<Button
												variant="outline"
												text="Видалити"
											/>
										</View>
									)
								}
							/>
						))
					) : (
						profiles?.map((profile) => (
							<Card
								key={profile.id}
								profile={profile}
								status={name}
								children={
									name === "Reqs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Підтвердити"
											/>
											<Button
												variant="outline"
												text="Видалити"
											/>
										</View>
									) : name === "Recs" ? (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Додати"
											/>
											<Button
												variant="outline"
												text="Видалити"
											/>
										</View>
									) : (
										<View style={styles.btns}>
											<Button
												variant="fill"
												text="Повідомлення"
											/>
											<Button
												variant="outline"
												text="Видалити"
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
