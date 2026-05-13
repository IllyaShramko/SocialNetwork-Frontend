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
				<Card
					profile={{
						id: 1,
						signature: null,
						userId: 1,
						birthDate: null,
						pseudonym: "yehor sdfvvsd",
						avatar: null,
						is_image_signature: true,
						is_text_signature: true,
						user: {
							id: 1,
							email: "123illya123123r@gmail.com",
							username: "lox",
							firstName: "illya",
							lastName: "shramko",
							dateJoined: new Date(),
							lastLogin: new Date(),
							isSuperuser: false,
							isStaff: false,
							isActive: true,
						},
					}}
					status={name}
					children={
						name === "Reqs" ? (
							<View style={styles.btns}>
								<Button variant="fill" onPress={() => {}} text="Підтвердити" />
								<Button variant="outline" onPress={() => {}} text="Видалити" />
							</View>
						) : name === "Recs" ? (
							<View style={styles.btns}>
								<Button variant="fill" onPress={() => {}} text="Додати" />
								<Button variant="outline" onPress={() => {}} text="Видалити" />
							</View>
						) : (
							<View style={styles.btns}>
								<Button variant="fill"  onPress={() => {}} text="Повідомлення" />
								<Button variant="outline" onPress={() => {}}	 text="Видалити" />
							</View>
						)
					}
				/>
				<Card
					profile={{
						id: 1,
						signature: null,
						userId: 1,
						birthDate: null,
						pseudonym: "yehor sdfvvsd",
						avatar: null,
						is_image_signature: true,
						is_text_signature: true,
						user: {
							id: 1,
							email: "123illya123123r@gmail.com",
							username: "lox",
							firstName: "illya",
							lastName: "shramko",
							dateJoined: new Date(),
							lastLogin: new Date(),
							isSuperuser: false,
							isStaff: false,
							isActive: true,
						},
					}}
					status={name}
					children={
						name === "Reqs" ? (
							<View style={styles.btns}>
								<Button variant="fill" text="Підтвердити" />
								<Button variant="outline" text="Видалити" />
							</View>
						) : name === "Recs" ? (
							<View style={styles.btns}>
								<Button variant="fill" text="Додати" />
								<Button variant="outline" text="Видалити" />
							</View>
						) : (
							<View style={styles.btns}>
								<Button variant="fill" text="Повідомлення" />
								<Button variant="outline" text="Видалити" />
							</View>
						)
					}
				/>
			</View>
		</View>
	);
}
