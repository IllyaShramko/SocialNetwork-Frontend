import { InferType } from "yup";
import { passwordValidator } from "../validators";

export type PasswordCardT = InferType<typeof passwordValidator>;
