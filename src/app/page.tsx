'use client'
import { useEffect, useState } from 'react'
import WelcomeScreen from './component/WelcomeScreen'
import { useRouter } from 'next/router'
export default function Home() {
  const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true)
    }, 3000)

    if (redirect) {
      window.location.href = '/login' // Redirect on the client side
    }
    return () => clearTimeout(timer)
  }, [redirect])
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <p className='text-lg text-gray-800'>welcome to </p>
      <p className='text-3xl font-bold text-orange animate__animated animate__flash'>
        FOODIED
      </p>
    </div>
  )
}
