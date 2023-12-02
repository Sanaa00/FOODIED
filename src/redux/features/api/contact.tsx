import { apiSlice } from './api'
const ContactApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addContact: builder.mutation({
      query: body => ({
        url: 'http://localhost:4000/api/contact',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['contact'],
    }),
    //     signup: builder.mutation({
    //       query: body => ({
    //         url: 'http://localhost:4000/api/user/signup',
    //         method: 'POST',
    //         body: body,
    //       }),
    //       invalidatesTags: ['signup'],
    //     }),
  }),
})

export const {
  useAddContactMutation,
  // useSignupMutation
} = ContactApi
