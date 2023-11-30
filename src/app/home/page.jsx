import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image1 from '../../../public/images/homeimage.png'
import chef1 from '../../../public/images/chef1.png'
import chef2 from '../../../public/images/chef2.png'
import chef3 from '../../../public/images/chef3.png'
import { services } from '../page.utility'
function Page() {
  return (
    <main className='lg:mx-36'>
      <section className=' flex pt-16 '>
        <div className='flex flex-col items-start w-1/2 mt-16'>
          <span className='border font-semibold border-black text-black rounded-full px-4 text-lg py-1'>
            Hungry?
          </span>
          <p className='text-black font-bold text-6xl mt-10 leading-[5rem]'>
            JUST COME TO FOODIED & ORDER
          </p>
          <p className='text-Gray mt-10'>
            Here you will Find Best Quality And Pure Food . Order{' '}
            <br className='hidden lg:block' />
            Now To Satisfy Your Hunger Pangs
          </p>
          <Link
            href='/menu'
            className='px-12 py-5 bg-orange hover:bg-opacity-60 hover:duration-500 hover:ease-in-out duration-500 text-white font-semibold text-lg rounded-full mt-10'
          >
            Order Now
          </Link>
        </div>
        <div className='flex justify-end items-center w-1/2'>
          <Image src={image1} alt='burger' height={600} />
        </div>
      </section>
      <section className='mt-20'>
        <p className='text-black font-bold text-6xl mt-10 leading-[5rem] text-center'>
          WHY CHOOOSE US?
        </p>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          {services.map(service => {
            return (
              <div
                key={service.id}
                className='shadow-lg flex flex-col justify-center p-4'
              >
                <div className='flex justify-center items-center'>
                  {service.icon}
                </div>
                <p className='font-semibold text-3xl text-black mt-5 text-center'>
                  {service.name}
                </p>
                <p className='text-Gray mt-5 text-center px-2'>
                  {service.descriptions}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className='my-20'>
        <p className='text-black font-bold text-6xl mt-10 leading-[5rem] text-center'>
          OUR SPECIAL CHEF S
        </p>
        <div className='grid grid-cols-3 gap-5 justify-between mt-10'>
          <div className='bg-orange bg-opacity-30 p-4 rounded-lg  h-fit '>
            <Image
              alt='chef'
              src={chef1}
              className='object-contain w-full h-[400px]'
            />
          </div>
          <div className='bg-orange bg-opacity-30 p-4 rounded-lg  mt-20'>
            <Image
              alt='chef'
              src={chef2}
              className='object-contain w-full h-[400px]'
            />
          </div>
          <div className='bg-orange bg-opacity-30 p-4 rounded-lg h-fit'>
            <Image
              alt='chef'
              src={chef3}
              className='object-contain w-full h-[400px]'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
