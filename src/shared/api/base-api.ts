import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryHeaders } from "./headers";
import { ENV } from "@shared/constants/env";
console.log(`http://${ENV.HOST}:${ENV.PORT}`);
export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: `http://${ENV.HOST}:${ENV.PORT}`,
		prepareHeaders: queryHeaders,
	}),
	endpoints: () => ({}),
});
