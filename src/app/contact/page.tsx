import React from 'react'
import contactIllustration from '../../../public/images/contact2.svg'
import Image from 'next/image'
import ContactForm from '../component/ContactForm'
export default function contact() {
  return (
    <div className='lg:mx-36 h-screen grid grid-cols-2 items-center justify-center'>
      <div className='flex justify-center'>
        <ContactForm />
      </div>
      <div className='flex justify-center'>
        <Image
          alt='contact'
          src={contactIllustration}
          className='w-[500px] h-[500px] object-cover mt-28'
        />
      </div>
    </div>
  )
}
