import { apiSlice } from './api'
const AuthApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: 'http://localhost:4000/api/user/login',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['login'],
    }),
    signup: builder.mutation({
      query: body => ({
        url: 'http://localhost:4000/api/user/signup',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['signup'],
    }),
    getCurrentUser: builder.query<User, void>({
      query: () => {
        return {
          url: `http://localhost:4000/api/user/login`,
          method: 'GET',
        }
      },
      providesTags: ['login'],
    }),
  }),
})

export const { useLoginMutation, useSignupMutation, useGetCurrentUserQuery } =
  AuthApi
