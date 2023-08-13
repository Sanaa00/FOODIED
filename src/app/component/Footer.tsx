import React from 'react'

export default function Footer() {
  return (
       <footer className='grid grid-cols-3 bg-orange bg-opacity-60 lg:px-36 py-5'>
            <div className='flex flex-col'>
                 <p className='font-bold text-lg text-black mb-3'>Menu</p>
                 <p>Sepecial menu</p>
                 <p>Regular Food</p>
            </div>
            
            <div className='flex flex-col'>
                 <p className='font-bold text-lg text-black mb-3'>Help</p>
                 <p>Privacy</p>
                 <p>Terms & Conditions</p>
            </div> 

             <div className='flex flex-col'>
                 <p className='font-bold text-lg text-black mb-3'>Contact</p>
                 <p>+(964)700 000 00 00</p>
                 <p>example@gmail.com</p>
            </div>
    </footer>
  )
}
