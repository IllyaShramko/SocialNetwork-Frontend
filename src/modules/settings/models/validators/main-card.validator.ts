import * as yup from "yup";

export const mainCardValidator = yup.object({
	firstName: yup.string().nullable().optional(),
	surname: yup.string().nullable().optional(),
	email: yup.string().email().required(),
	birthday: yup.date().nullable().optional(),
});
