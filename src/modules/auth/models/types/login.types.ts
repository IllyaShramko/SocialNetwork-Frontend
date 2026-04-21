import { InferType } from "yup";
import { loginValidator } from "../validators";

export type LoginFormT = InferType<typeof loginValidator>;