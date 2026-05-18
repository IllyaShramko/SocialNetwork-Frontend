import * as yup from "yup";

export const createAlbumValidator = yup.object({
	name: yup.string().required(),
	theme: yup.string().required(),
	year: yup.number().required(),
});
