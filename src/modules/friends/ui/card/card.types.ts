import { ProfileWithUser } from "@shared/api/types";
import { ReactNode } from "react";

export interface CardProps {
	profile: ProfileWithUser;
	children: ReactNode;
	status: string
}
