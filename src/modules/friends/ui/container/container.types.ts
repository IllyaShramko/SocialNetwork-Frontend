import { User } from "@shared/api/types";

export interface ContainerProps {
	name: "Reqs" | "Recs" | "AllF";
	profiles?: User[];
	redirectTo?: string;
	isLoading?: boolean;
}
