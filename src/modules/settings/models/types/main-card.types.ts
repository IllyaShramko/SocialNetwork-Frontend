import { InferType } from "yup";
import { mainCardValidator } from "../validators";

export type MainCardT = InferType<typeof mainCardValidator>;
