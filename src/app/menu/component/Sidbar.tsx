import ItemCard from '@/app/component/ItemCard'
import Search from '@/app/component/Search'
import { useGetAllCategoryQuery } from '@/redux/features/api/category'
import { addCategory } from '@/redux/features/api/categorySlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function Sidbar({ allFood }: Food) {
  const dispatch = useDispatch()
  const { data: allCategory } = useGetAllCategoryQuery()

  const filterHandler = (category: string) => {
    dispatch(addCategory(category))
  }
  return (
    <div className='grid grid-cols-4 gap-5 '>
      <div className='grid col-start-1 col-end-2 justify-start items-start mt-5 w-full'>
        <div className='w-full'>
          <p className='text-2xl text-dark font-semibold'>Category</p>
          <hr className='text-Gray w-64 mt-2' />
          <div className='flex flex-col justify-start items-start w-full mt-3'>
            <button
              onClick={() => filterHandler('')}
              className='text-lg font-semibold text-black hover:text-orange active:text-orange focus:text-orange hover:scale-110 hover:duration-500 duration-500 mt-3 hover:ease-in-out'
            >
              All
            </button>
            {allCategory?.data?.map(categoryy => {
              return (
                <div key={categoryy._id}>
                  <button
                    onClick={() => filterHandler(categoryy._id)}
                    className='text-lg font-semibold text-black hover:text-orange active:text-orange focus:text-orange hover:scale-110 hover:duration-500 duration-500 mt-3 hover:ease-in-out'
                  >
                    {categoryy.name}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='grid col-start-2 col-end-5'>
        <div className='flex self-end w-full justify-end'>
          {' '}
          <Search />
        </div>

        {allFood && <ItemCard allFood={allFood} />}
      </div>
    </div>
  )
}

export default Sidbar
