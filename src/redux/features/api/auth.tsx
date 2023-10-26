import { apiSlice } from "./api";
const AuthApi = apiSlice.injectEndpoints({

     endpoints: (builder) => ({

          getAllFood: builder.query<food[],foodquery>({
               query: ({ search, page, limit }) => {
                    return {
                         url: `/food?search=${search}&page=${page}&limit=${limit}`,
                         method: "GET", // Set the HTTP method (GET, POST, etc.) as needed
                    };
               }
          }),
     login: builder.mutation({
      query: (body) => ({
        url: "http://localhost:4000/api/user/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["login"],
    }),
        signup: builder.mutation({
      query: (body) => ({
        url: "http://localhost:4000/api/user/signup",
        method: "POST",
                  body: body,
        
      }),
      invalidatesTags: ["signup"],
    }),
        
     })

})

export const { useGetAllFoodQuery ,useLoginMutation,useSignupMutation} = AuthApi;