import ItemCard from '@/app/component/ItemCard'
import React from 'react'

function Sidbar({ currentItems ,filterHandler}: SidbarPropd) {
     const category = ["Burger","Pizza","Noodles","Hot Dog","Sandwich","french fry" ]
  return (
       <div className='grid grid-cols-4 gap-5 '>
            <div className='grid col-start-1 col-end-2 justify-start items-start mt-16 w-full'>
                 <div className='w-full'>
                      <p className='text-2xl text-dark font-semibold'>Category</p>
                      <hr className='text-Gray w-64 mt-2'/>
                      <div className='flex flex-col justify-start items-start w-full mt-3'>
                           <button onClick={() => filterHandler("")}
                                       className='text-lg font-semibold text-black hover:text-orange active:text-orange focus:text-orange hover:scale-110 hover:duration-500 duration-500 mt-3 hover:ease-in-out'
                                     >All</button>
                           {category?.map((categoryy) => {
                                return <div key={categoryy}>
                                     
                                   <button onClick={() => filterHandler(categoryy)} key={categoryy}
                                       className='text-lg font-semibold text-black hover:text-orange active:text-orange focus:text-orange hover:scale-110 hover:duration-500 duration-500 mt-3 hover:ease-in-out'
                                     >{categoryy}</button>
                                </div>
                 })}</div>
                 </div>
               
                

            </div>
            <div className='grid col-start-2 col-end-5'>
                 <ItemCard currentItems={currentItems} />
            </div>
     
    </div>
  )
}

export default Sidbar
