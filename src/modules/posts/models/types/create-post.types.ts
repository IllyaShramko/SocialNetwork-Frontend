import { InferType } from "yup";
import { postCreateValidator } from "../validators/create-post.validator";


export type postCreateType = InferType<typeof postCreateValidator>