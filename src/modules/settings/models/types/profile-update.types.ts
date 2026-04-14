import { InferType } from "yup";
import { profileCardValidator } from "../validators";

export type ProfileCardT = InferType<typeof profileCardValidator>;
