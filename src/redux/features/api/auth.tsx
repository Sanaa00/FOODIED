import { apiSlice } from './api'
const AuthApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/user/login',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['login'],
    }),
    signup: builder.mutation({
      query: body => ({
        url: '/user/signup',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['signup'],
    }),
    getCurrentUser: builder.query<User, void>({
      query: token => {
        return {
          url: `/user/login`,
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      },
      providesTags: ['login'],
    }),
  }),
})

export const { useLoginMutation, useSignupMutation, useGetCurrentUserQuery } =
  AuthApi
