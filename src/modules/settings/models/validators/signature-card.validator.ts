import * as yup from "yup";

export const signatureValidator = yup.object({
    signature: yup.string().nullable(),
});
