import { InferType } from "yup";
import { registerValidators } from "../validators";

export type RegFormStepOne = InferType<typeof registerValidators.stepOne>;
export type RegFormStepTwo = InferType<typeof registerValidators.stepTwo>;
