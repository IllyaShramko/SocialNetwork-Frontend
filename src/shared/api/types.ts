
export type ApiError = {
    data: {
        message: string,
        status: "error"
    },
    status: number
}