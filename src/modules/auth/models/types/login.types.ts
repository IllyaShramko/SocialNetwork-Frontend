import { InferType } from "yup";
import { loginValidator } from "../validators/login.validation";

export type LoginFormT = InferType<typeof loginValidator>;