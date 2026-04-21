import * as yup from "yup";

export const firstEnterValidator = yup.object({
	pseyudonim: yup.string().required("Це поле є обов'язковим"),
	username: yup.string().required("Це поле є обов'язковим"),
});
