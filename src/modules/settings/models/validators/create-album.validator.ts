import * as yup from "yup";

export const createAlbumValidator = yup.object({
	name: yup.string().required(),
	topicId: yup.number().required(),
	year: yup.number().required(),
});
