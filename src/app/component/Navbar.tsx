"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import userImage from "../../../public/images/user.png"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from 'react-redux';

type IsActive = {

     ({ isActive }: { isActive: string; }) : string
}
function Navbar() {
     const user = useSelector(state => state.user.user)
     console.log("user in navbar",user)
    const {order} = useSelector((state: RootState) => state?.order?.order)

     console.log(order.length)
     return (
          <div className='fixed w-screen bg-white/80 z-50'>
               <nav className='flex justify-between items-center lg:mx-36 py-6 '>
            <Link href="/home" className='text-black font-bold text-lg'>FOODIED</Link>
            
            <div className='flex text-lg text-orange font-bold items-center'>
                 <Link href="/home" className='px-6 '>Home</Link>
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
                         {/* <div className='w-10 h-10'> */}
                              {(user !== null || user!==undefined )?
                         <Link href="/profile" >
                                   <Image   width={30}
      height={30} className='w-full h-full object-cover rounded-full shadow ml-4' src={userImage} alt="profile" /></Link>:null}
                    {/* </div> */}
                        
                         
            </div>
      
    </nav></div>
     
  )
}

export default Navbar
