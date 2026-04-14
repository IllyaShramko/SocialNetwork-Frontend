import { InferType } from "yup";
import { registerValidators } from "../validators/register.validation";

export type RegFormStepOne = InferType<typeof registerValidators.stepOne>;
export type RegFormStepTwo = InferType<typeof registerValidators.stepTwo>;
