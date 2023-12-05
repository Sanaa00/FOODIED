import { apiSlice } from './api'
const ContactApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addToCart: builder.mutation({
      query: body => ({
        url: 'http://localhost:4000/api/order',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['card'],
    }),
    getCartBYUser: builder.query<UserCart, OrderRequestProp>({
      query: ({ userId }) => {
        return {
          url: `http://localhost:4000/api/cart/userCard/${userId}`,
          method: 'GET',
        }
      },
      providesTags: ['card'],
    }),
  }),
})

export const { useAddToCartMutation, useGetCartBYUserQuery } = ContactApi
