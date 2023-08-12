"use client"
import Link from 'next/link'
import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from 'react-redux';
// import NavLink from './N
type IsActive = {
     // isActive:string
     ({ isActive }: { isActive: string; }) : string
}
function Navbar() {
     // const { order } = useSelector((state: OrderSlice) => state?.order?.order)
     // const { order } = useSelector((state: OrderSlice) => state)
    const {order} = useSelector((state: OrderSlice) => state?.order?.order)

     console.log(order.length)
     return (
          <div className='fixed w-screen bg-white/80 z-50'>
               <nav className='flex justify-between items-center lg:mx-36 py-6 '>
            <Link href="/" className='text-black font-bold text-lg'>FOODIED</Link>
            
            <div className='flex text-lg text-orange font-bold items-center'>
                 <Link href="/" className='px-6 '>Home</Link>
                 <Link href="/menu" className='px-6 '>Menu</Link>
                 <Link href="/contact " className='px-6 '>Contact</Link>
                 <Link href="/order" className='relative'>
                      
                      {order?.length !== 0 &&
                           <span className='text-white bg-opacity-90 bg-black py-1 px-2 text-sm  font-normal rounded-full absolute -right-2 -top-2'>
                                {order?.length}
                      </span>}
                      <div className='shadow bg-orange rounded-full p-2'>
                      
                           <HiOutlineShoppingBag className="text-white w-5 h-5"/>
                      </div>
                        </Link>
            </div>
      
    </nav></div>
     
  )
}

export default Navbar
