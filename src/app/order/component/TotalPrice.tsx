import React from 'react'
import { useSelector } from 'react-redux'
function TotalPrice() {
  const { order } = useSelector((state: RootState) => state.order.order)
  let sum = 0

  order.reduce((_: any, order: Dishes) => (sum += order.price * 1), 0)

  return (
    <div className='bg-orange bg-opacity-60 p-5 flex flex-col w-96 rounded h-fit mt-40'>
      <p className='font-semibold text-center'>Order Summery</p>
      <div className='mt-5 '>
        {order?.map((dish: Dishes) => {
          return (
            <div
              key={dish.id}
              className='flex justify-between items-center my-1'
            >
              <p>{dish.name}</p>
              <p>{dish.price}</p>
            </div>
          )
        })}
      </div>
      <hr className='mt-2' />
      <div className='flex justify-between items-center mt-2'>
        <p>Total Price</p> <p>{sum}</p>
      </div>
    </div>
  )
}

export default TotalPrice
