import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { RootState } from "./reduxStore";
export const apiSlice = createApi({
     reducerPath: "api",
     baseQuery: fetchBaseQuery({
          baseUrl: process.env.VITE_BASE_URL,
       prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
console.log("token",token)
      if (token !== null || token !== "undefined") {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
      return headers;
    },
  }),
 tagTypes: ["login","signup"],
          
     // }),
     endpoints: () => ({}),
})