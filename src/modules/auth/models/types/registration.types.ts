import { InferType } from "yup";
import { registerValidator } from "../validators/register.validation";

export type RegForm = InferType<typeof registerValidator>;