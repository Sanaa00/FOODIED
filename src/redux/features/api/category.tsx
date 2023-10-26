import { apiSlice } from "./api";
const categoryApi = apiSlice.injectEndpoints({

     endpoints: (builder) => ({
 getAllCategory: builder.query<category,void>({
      query: () => "http://localhost:4000/api/category/",
      providesTags: ["category"],
    }),
          // getAllCategory: builder.query<category[],>({
          //      query: () => {
          //           return {
          //                url: `http://localhost:4000/api/category`,
          //                method: "GET", // Set the HTTP method (GET, POST, etc.) as needed
          //           };
          //      }
          // })
     })

})

export const { useGetAllCategoryQuery } = categoryApi;