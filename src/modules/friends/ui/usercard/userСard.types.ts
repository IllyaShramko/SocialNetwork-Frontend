import { User } from "@shared/api/types";
import { ReactNode } from "react";



export type UserCardProps = {
	user: User;
	children?: ReactNode;
};