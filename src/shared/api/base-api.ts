import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryHeaders } from "./headers";

export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://192.168.0.2:8000",
		prepareHeaders: queryHeaders,
	}),
	endpoints: () => ({}),
});