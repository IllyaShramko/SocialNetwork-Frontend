import { InferType } from "yup";
import { firstEnterValidator } from "../validators";

export type FirstEnterT = InferType<typeof firstEnterValidator>;