import { InferType } from "yup";
import { createAlbumValidator } from "../validators";

export type CreateAlbumT = InferType<typeof createAlbumValidator>