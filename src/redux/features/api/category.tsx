import { apiSlice } from './api'
const categoryApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllCategory: builder.query<category, void>({
      query: () => 'http://localhost:4000/api/category/',
      providesTags: ['category'],
    }),
  }),
})

export const { useGetAllCategoryQuery } = categoryApi
s
