import * as yup from "yup";

export const loginValidator = yup.object({
	email: yup
		.string()
		.required("Це поле є обов'язковим")
		.email("Введіть коректну електронну адресу"),
	password: yup
		.string()
		.required("Це поле є обов'язковим")
		.min(8, "Пароль повинен мати мінімум 8 символів"),
});