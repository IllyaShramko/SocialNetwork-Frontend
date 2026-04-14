import * as yup from "yup";

export const registerValidators = {
	stepOne: yup.object({
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
	}),
	stepTwo: yup.object({
		firstNumber: yup.string().required().min(0).max(9),
		secondNumber: yup.string().required().min(0).max(9),
		thirdNumber: yup.string().required().min(0).max(9),
		fourthNumber: yup.string().required().min(0).max(9),
		fivethNumber: yup.string().required().min(0).max(9),
		sixthNumber: yup.string().required().min(0).max(9),
	}),
};
