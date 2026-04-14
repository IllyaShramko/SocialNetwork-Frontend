import * as yup from "yup";

export const profileCardValidator = yup.object({
	username: yup.string().required(),
    avatar: yup.string().nullable(),
});

