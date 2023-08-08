import Link from 'next/link'
import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
// import NavLink from './N
type IsActive = {
     // isActive:string
     ({ isActive }: { isActive: string; }) : string
}
function Navbar() {
  return (
       <nav className='flex justify-between items-center lg:mx-36 py-6'>
            <Link href="/" className='text-black font-bold text-lg'>FOODIED</Link>
            
            <div className='flex text-lg text-orange font-bold items-center'>
                 <Link href="/" className='px-6 '>Home</Link>
                 <Link href="/menu" className='px-6 '>Menu</Link>
                 <Link href="/contact " className='px-6 '>Contact</Link>
                 <Link href="/order">
                      <div className='shadow bg-orange rounded-full p-2'>
                           <HiOutlineShoppingBag className="text-white w-5 h-5"/>
                      </div>
                        </Link>
            </div>
      
    </nav>
  )
}

export default Navbar
