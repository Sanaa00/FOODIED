"use client"
import { addToOrder, deleteInOrder } from '@/redux/features/orderSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import orderPhoto from "../../../public/images/order.svg"
import Image from 'next/image';
import TotalPrice from './component/TotalPrice'

export default function page() {
  
  const dispatch = useDispatch()
  const { order } = useSelector((state: RootState) => state?.order.order)

  // let sum = 0;

  // order.reduce((_: any, order: Dishes) => (sum += order.price * 1), 0);
  console.log(order,"order")

  return (
    // <>he</>
    <div className='lg:mx-36 py-10 min:h-screen'>
      {order?.length !== 0 ?
        <div className='flex flex-row justify-between '>
          <div className='grid grid-cols-2 gap-5 w-2/3 '>
        
        {
            order?.map((dish:Dishes) => {
              return (<div key={dish.id} className='shadow-lg rounded relative mt-40 border border-gray-100'>
                <div className='flex justify-center items-center'>
                  <img src={dish.image} className='w-60 h-60 rounded-full object-cover absolute -top-28 border-4 border-orange shadow-lg' />
                </div>
        
                <div className='p-4 mt-32 '>
                  <p className='text-lg font-bold text-black text-center '>{dish.name}</p>
                  {/* <div className='flex flex-row justify-center mt-5'>
              <div>{dish.stars}</div><p className='text-Gray'>({dish.review})</p>
             
             
            </div> */}
                  <p className=' mt-5'>{dish.description}</p>
                  <div className='flex justify-between mt-5 '>
                    <p className='text-black border border-black rounded-full py-2 w-24 text-center '>{dish.price}</p>
                    <button
                      onClick={() => dispatch(deleteInOrder(dish.id))}
                      className='px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 hover:duration-500 duration-500 hover:shadow-md'>Remove</button>
                  </div>
                </div>
      
              </div>)
              })}
        </div> <TotalPrice/></div>
     
          
        :
        <div className='flex justify-center items-center'>
          <Image src={orderPhoto} alt='order' className='w-[500px] h-[500px] object-cover mt-28' />
        </div>
        }
    
 
    </div>
  )
}
