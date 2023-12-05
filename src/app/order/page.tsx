/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { deleteInOrder } from '@/redux/features/orderSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import orderPhoto from '../../../public/images/order.svg'
import Image from 'next/image'
import TotalPrice from './component/TotalPrice'
import { useGetCartBYUserQuery } from '@/redux/features/api/cart'
import { useGetCurrentUserQuery } from '@/redux/features/api/auth'

export default function Page() {
  const dispatch = useDispatch()
  const { data: currentUser } = useGetCurrentUserQuery()
  const userId = currentUser?.user?._id
  const { data: order } = useGetCartBYUserQuery({ userId })
  return (
    <>
      <div className='lg:mx-36 py-20 min:h-screen'>
        {order?.userCart?.foods?.length !== 0 ? (
          <div className='flex flex-row gap-5 justify-between min:h-screen'>
            <div className='grid grid-cols-3 gap-5 w-3/4 '>
              {order?.userCart?.foods?.map(dish => {
                return (
                  <div
                    key={dish?.productId?._id}
                    className='shadow-lg rounded relative mt-40 border border-gray-100'
                  >
                    <div className='flex justify-center items-center'>
                      <img
                        src={dish?.productId?.image}
                        className='w-60 h-60 rounded-full object-cover absolute -top-28 border-4 border-orange shadow-lg'
                      />
                    </div>

                    <div className='p-4 mt-32 '>
                      <p className='text-lg font-bold text-black text-center '>
                        {dish?.productId?.name}
                      </p>
                      <p className=' mt-5'>{dish?.productId?.description}</p>
                      <div className='flex justify-between mt-5 '>
                        <p className='text-black border border-black rounded-full py-2 w-24 text-center '>
                          {dish?.productId?.price ? dish?.productId?.price : ''}
                        </p>
                        <button
                          onClick={() =>
                            dispatch(deleteInOrder(dish?.productId?._id))
                          }
                          className='px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 hover:duration-500 duration-500 hover:shadow-md'
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='w-1/4'>
              <TotalPrice />
            </div>{' '}
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <Image
              src={orderPhoto}
              alt='order'
              className='w-[500px] h-[500px] object-cover mt-28'
            />
          </div>
        )}
      </div>
    </>
  )
}
