import { InferType } from "yup";
import { signatureValidator } from "../validators";

export type SignatureCardT = InferType<typeof signatureValidator>;
