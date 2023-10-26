import { apiSlice } from "./api";
const foodApi = apiSlice.injectEndpoints({

     endpoints: (builder) => ({

          getAllFood: builder.query<food,foodquery>({
               query: ({  page, limit }) => {
                    return {
                         url: `http://localhost:4000/api/food?page=${page}&limit=${limit}`,
                         method: "GET", // Set the HTTP method (GET, POST, etc.) as needed
                    };
               }
          })
     })

})

export const { useGetAllFoodQuery } = foodApi;