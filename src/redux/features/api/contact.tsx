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
  }),
})

export const { useAddContactMutation } = ContactApi
