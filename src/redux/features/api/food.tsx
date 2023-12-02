import { apiSlice } from './api'
const foodApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllFood: builder.query<Food['allFood'], foodquery>({
      query: ({ page, limit, category, search }) => {
        return {
          url: `http://localhost:4000/api/food?page=${page}&limit=${limit}&categoryId=${category}&name=${search}`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetAllFoodQuery } = foodApi
