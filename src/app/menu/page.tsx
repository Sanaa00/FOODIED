"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { FaCircleArrowRight,FaCircleArrowLeft } from "react-icons/fa6";
import Sidbar from './component/Sidbar';
import { useGetAllFoodQuery } from '@/redux/features/api/food';
import { useSelector } from 'react-redux';


export default function Menu() {
  const [page,setPage]=useState(1)
  const category = useSelector((state: categoryProp) => state.category.category)
  const search=useSelector((state:RootStateSearch)=>state.search.search)
  const { data: allFood, isLoading, isError, error } = useGetAllFoodQuery({ search:search, page: page, limit: 3 ,category:category});
console.log(allFood)
  return (
 
      <div className='lg:mx-36 flex flex-col items-center pt-10'>
      <section className='flex flex-col items-center'>
      <p className='text-black font-bold text-6xl mt-10 leading-[5rem] text-center'>OUR REGULAR FOOD</p>
      <p className='text-Gray mt-10 text-center w-2/5'>
        This is our daily food list. Here you will find all kinds of food . choose your favorite food and order
      </p>
   <Sidbar
          allFood={allFood}
          />

    
     <ReactPaginate
        className='flex items-center my-5'
        previousLabel={<FaCircleArrowLeft className="w-6 h-6 text-orange m-3"/>}
        nextLabel={<FaCircleArrowRight className="w-6 h-6 text-orange m-3" />}
        onPageChange={(e) => {
            setPage(e.selected + 1);
          }}
          
        pageCount={allFood? Math.ceil(allFood?.data?.result/ 3):page}
        pageRangeDisplayed={2}
       
        containerClassName="text-Gray m-2 p-2"
        pageClassName="text-black mx-2 text-lg"
        activeClassName=" text-orange "
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
  
    
    </section>
      </div>


 
  )
}
