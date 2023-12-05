/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useGetCurrentUserQuery } from '@/redux/features/api/auth'
import emptyphoto from '../../../public/images/Pasta-bro.png'
import Starts from './Starts'
import Image from 'next/image'
import { useAddContactMutation } from '@/redux/features/api/contact'

function ItemCard({ allFood }: Food) {
  const { data: currentUser } = useGetCurrentUserQuery()
  const [addToCart] = useAddContactMutation()
  const userId = currentUser?.user?._id
  const addToCartHandler = (productId: string) => {
    addToCart({ productId, userId })
  }

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        {allFood?.data?.fetchedFood.length === 0 ? (
          <Image
            src={emptyphoto}
            width={500}
            height={500}
            alt='Picture of the author'
          />
        ) : (
          <div className='my-5 grid grid-cols-3 gap-5'>
            {allFood?.data?.fetchedFood?.map(dish => {
              return (
                <div
                  key={dish._id}
                  className='shadow-lg rounded relative mt-40 border border-gray-100'
                >
                  <div className='flex justify-center items-center'>
                    <img
                      src={dish.image}
                      className='w-60 h-60 rounded-full object-cover absolute -top-28 border-4 border-orange shadow-lg'
                    />
                  </div>

                  <div className='p-4 mt-32 '>
                    <p className='text-lg font-bold text-black text-center '>
                      {dish.name}
                    </p>
                    <div className='flex flex-row justify-center items-center mt-5'>
                      <div>
                        <Starts count={dish.stars} />
                      </div>
                      <p className='text-Gray'>({dish.review})</p>
                    </div>
                    <p className='text-center mt-5'>{dish.description}</p>
                    <div className='flex justify-between mt-5 '>
                      <p className='text-black border border-black rounded-full py-2 w-24 text-center '>
                        {dish.price} 000
                      </p>
                      <button
                        onClick={() => addToCartHandler(dish._id)}
                        className='px-3 py-1 bg-orange hover:shadow-md hover:bg-opacity-60 duration-500 hover:duration-500 hover:ease-in-out text-white rounded-full'
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}{' '}
          </div>
        )}{' '}
      </div>
    </>
  )
}

export default ItemCard
