import { ProfileWithUser } from "@shared/api/types";
import { ViewProps } from "react-native";

export interface ContainerProps {
    name: "Reqs" | "Recs" | "AllF"
    profiles?: ProfileWithUser[],
    redirectTo?: string
}