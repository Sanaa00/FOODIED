"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
type Props = {
    params :{
         singleDish:number
    }
}
function SingleDish({ params }: Props) {
     const [singleDish, setsingleDish] = useState<Dishes>()
     console.log(params?.singleDish)
            console.log(singleDish)
       useEffect(() => {
           
    axios
      .get(` http://localhost:8000/dishes/${params?.singleDish}`)
      .then((response) => {
        setsingleDish(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
 
       }, [])

     
  return (
       <div className='lg:mx-36 pt-32 grid grid-cols-2 h-screen'>
            <div>
                 <p className='text-black font-bold text-2xl '>{singleDish?.name}</p>
                 <p>
                      {singleDish?.description}
                 </p>
            </div>    
            <div>{singleDish?.image&&<img alt="dish" src={singleDish.image } className='w-full h-96 object-cover' />}</div>
     
    </div>
  )
}

export default SingleDish
