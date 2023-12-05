/* eslint-disable @next/next/no-img-element */
'use client'
import Starts from '@/app/component/Starts'
import { addToOrder } from '@/redux/features/orderSlice'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
type Props = {
  params: {
    singleDish: number
  }
}
function SingleDish({ params }: Props) {
  const dispatch = useDispatch()
  const [singleDish, setsingleDish] = useState<Dishes>()

  useEffect(() => {
    axios
      .get(` http://localhost:8000/dishes/${params?.singleDish}`)
      .then(response => {
        setsingleDish(response.data)
      })
  }, [params?.singleDish])

  return (
    <div className='lg:mx-36 pt-32 grid gap-x-10 grid-cols-2 h-screen'>
      <div className='flex flex-col justify-between h-96'>
        <div>
          {' '}
          <p className='text-black font-bold text-2xl '>{singleDish?.name}</p>
          <div className='flex justify-between items-center'>
            <p className='text-orange font-semibold text-lg bg-gray-50 mt-5 px-4 py-1 rounded-full w-fit'>
              {singleDish?.category}
            </p>
            <div className='flex flex-row items-center mt-5'>
              <div>
                {singleDish?.stars && <Starts count={singleDish?.stars} />}
              </div>
              <p className='text-Gray'>({singleDish?.review})</p>
            </div>
          </div>
          <p className='mt-5'>{singleDish?.description}</p>
        </div>
        <div>
          {' '}
          {singleDish && (
            <button
              onClick={() => dispatch(addToOrder(singleDish))}
              className='px-6 py-1 bg-orange hover:shadow-md hover:bg-opacity-60 duration-500 hover:duration-500 hover:ease-in-out text-white rounded-full'
            >
              Order Now
            </button>
          )}
        </div>
      </div>
      <div>
        {singleDish?.image && (
          <img
            alt='dish'
            src={singleDish.image}
            className='w-full h-96 object-cover'
          />
        )}
      </div>
    </div>
  )
}

export default SingleDish
