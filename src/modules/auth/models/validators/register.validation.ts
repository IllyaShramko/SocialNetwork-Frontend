import * as yup from "yup";

export const registerValidator = yup.object({
	email: yup
		.string()
		.required("Це поле є обов'язковим")
		.email("Невірний формат електронної пошти"),
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
