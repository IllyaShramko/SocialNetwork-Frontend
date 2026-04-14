import * as yup from "yup";

export const passwordValidator = yup.object({
	password: yup
		.string()
		.required("Це поле є обов'язковим")
		.min(8, "Мінімальна довжина 8 символів"),
	confirmPassword: yup
		.string()
		.required("Це поле є обов'язковим")
		.min(8, "Мінімальна довжина 8 символів")
		.oneOf([yup.ref("password")], "Паролі повинні співпадати"),
});
