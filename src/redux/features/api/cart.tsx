import { apiSlice } from './api'
const ContactApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addToCart: builder.mutation({
      query: body => ({
        url: '/order',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['card'],
    }),
    getCartBYUser: builder.query<UserCart, OrderRequestProp>({
      query: ({ userId }) => {
        return {
          url: `/cart/userCard/${userId}`,
          method: 'GET',
        }
      },
      providesTags: ['card'],
    }),
  }),
})

export const { useAddToCartMutation, useGetCartBYUserQuery } = ContactApi
