import { apiSlice } from "./api";
const AuthApi = apiSlice.injectEndpoints({

     endpoints: (builder) => ({
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

export const {  useLoginMutation,useSignupMutation} = AuthApi;