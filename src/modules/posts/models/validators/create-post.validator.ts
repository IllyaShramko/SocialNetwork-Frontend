import * as yup from "yup";

export const postCreateValidator = yup.object({
	title: yup
		.string()
		.min(3, "Назва дуже коротка")
		.max(255, "Назва дуже довга, зроби коротче")
		.required("Назва обов'язкова"),

	topic: yup
		.string()
		.min(2, "Тема повина більш інформативна")
		.optional(),

	content: yup
		.string()
		.min(4, "Опис повинен бути більш детальніше")
		.required("Опис обов'язковий"),

	tagIds: yup.array().of(yup.number().integer().min(0)).ensure(),

	links: yup
		.array()
		.of(yup.string().url("Невірний формат посилання"))
		.max(3, "Максимум 3 посилання")
		.ensure(),

	images: yup
		.array()
		.of(
			yup.object().shape({
				uri: yup.string().required(),
			}),
		)
		.ensure()
		.max(7, "Максимум можно загрузить 7 фотографий")
		.optional(),
});
