import { User } from "@shared/api/types";
import { ReactNode } from "react";

export interface CardProps {
	user: User;
	children: ReactNode;
}
