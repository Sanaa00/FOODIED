"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { FaCircleArrowRight,FaCircleArrowLeft } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import Sidbar from './component/Sidbar';
export default function Menu() {

  const { order } = useSelector((state: OrderSlice) => state)
  console.log(order)
  const [menuItems, setMenuItems] = useState<Dishes[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState<Dishes[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filterProduct,SetFilterProduct]=useState<Dishes[]>(menuItems)
  const itemsPerPage = 9;
  

  const endOffset = itemOffset + itemsPerPage;
  const handlePageClick = (event:PageClickEvent) => {
     const newOffset = (event.selected * itemsPerPage) % menuItems?.length;
    setItemOffset(newOffset);
  };
   
  function FiltterHandler (category?: string)  {
    if (category === "" || category===null) {
      return SetFilterProduct(menuItems)
    } else {
      SetFilterProduct(menuItems.filter((product) => {
     return  product.category===category
    }))
    }
   
  }

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
    SetFilterProduct(menuItems)
  },[menuItems])
  useEffect(() => {
    
    setCurrentItems(filterProduct?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterProduct?.length / itemsPerPage));
    setIsLoading(false);
  }, [endOffset, itemOffset, itemsPerPage,pageCount,menuItems,filterProduct]);
    // console.log("curent ",currentItems,menuItems)
  
  return (
 
      <div className='lg:mx-36 flex flex-col items-center pt-10'>
      <section className='flex flex-col items-center'>
      <p className='text-black font-bold text-6xl mt-10 leading-[5rem] text-center'>OUR REGULAR FOOD</p>
      <p className='text-Gray mt-10 text-center w-2/5'>
        This is our daily food list. Here you will find all kinds of food . choose your favorite food and order
      </p>
        {isLoading ? <div className='w-screen h-screen flex justify-center mt-20'>
          <div className="custom-loader"></div>
        </div> :
          <Sidbar currentItems={currentItems} filterHandler={FiltterHandler} />
            // <ItemCard currentItems={currentItems}/>
          }
    
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
      </div>


 
  )
}
