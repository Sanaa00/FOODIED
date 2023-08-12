"use client"
import React, { Suspense, useEffect, useState } from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { FaCircleArrowRight,FaCircleArrowLeft } from "react-icons/fa6";
import getAllItemMenu from '../../../lib/getAllItemMenu';
import SpecialMenu from './component/SpecialMenu';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { addToOrder, deleteInOrder } from '@/redux/features/orderSlice';
import { store } from "../../redux/store"
interface PageClickEvent {
  selected: number;
}
export default function menu() {
  const dispatch = useDispatch()
  const { order } = useSelector((state: OrderSlice) => state)
  console.log(order)
  const [menuItems, setMenuItems] = useState<Dishes[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState<Dishes[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const endOffset = itemOffset + itemsPerPage;
  const handlePageClick = (event:PageClickEvent) => {
     const newOffset = (event.selected * itemsPerPage) % menuItems?.length;
    setItemOffset(newOffset);
  };
   
   useEffect(() => {
  
    axios
      .get(" http://localhost:8000/dishes")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
 
  }, [])

    useEffect(() => {
    setCurrentItems(menuItems?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(menuItems?.length / itemsPerPage));
    setIsLoading(false);
  }, [endOffset, itemOffset, itemsPerPage,pageCount,menuItems]);


  
   
  
  return (
    <Provider store={store}>
      <div className='lg:mx-36 flex flex-col items-center pt-10'>
      <section className='flex flex-col items-center'>
      <p className='text-black font-bold text-6xl mt-10 leading-[5rem] text-center'>OUR REGULAR FOOD</p>
      <p className='text-Gray mt-10 text-center w-2/5'>
        This is our daily food list. Here you will find all kinds of food . choose your favorite food and order
      </p>
        {isLoading ? <div className='w-screen h-screen flex justify-center mt-20'>
          <div className="custom-loader"></div>
        </div> :
        <div className='my-5 grid grid-cols-3 gap-5'>{currentItems?.map((dish) => {
        return <div key={dish.id} className='shadow-lg rounded relative mt-40 border border-gray-100'>
          <div className='flex justify-center items-center'>
            <img src={dish.image} className='w-60 h-60 rounded-full object-cover absolute -top-28 border-4 border-orange shadow-lg' />
          </div>
        
          <div className='p-4 mt-32 '>
            <p className='text-lg font-bold text-black text-center '>{dish.name}</p>
            <div className='flex flex-row justify-center mt-5'>
              <div>{dish.stars}</div><p className='text-Gray'>({dish.review})</p>
             
             
            </div>
            <p className=' mt-5'>{dish.description}</p>
            <div className='flex justify-between mt-5 '>
                <p className='text-black border border-black rounded-full py-2 w-24 text-center '>{dish.price} 000</p>
              <button
                onClick={()=>dispatch(addToOrder(dish))}
                className='px-3 py-1 bg-orange text-white rounded-full'>Order Now</button>
              </div>
          </div>
      
      </div>
        })}
      </div>}
    
      <ReactPaginate
        className='flex items-center my-5'
        previousLabel={<FaCircleArrowLeft className="w-6 h-6 text-orange m-3"/>}
        nextLabel={<FaCircleArrowRight className="w-6 h-6 text-orange m-3"/>}
        pageCount={pageCount}
         pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="text-Gray m-2 p-2"
         pageClassName="text-black mx-2 text-lg"
        activeClassName=" text-orange "
      />
  
    
    </section>
</div></Provider>

 
  )
}
