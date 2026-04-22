export type ApiError = {
	data: {
		message: string;
		status: "error";
	};
	status: number;
};

export function isApiError(
	error: unknown,
): error is ApiError {
	return typeof error === "object" && error != null && "status" in error && "data" in error;
}
