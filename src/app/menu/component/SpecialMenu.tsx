import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function SpecialMenu() {
       const settings = {
      dots: true,
     //  infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3
     };
     const specialMenuItems:Dishes[] = [
            {
               "id":1,
               "name":"Hamburger",
               "image":"https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
               "description":"This is a great green salad that is very healthy.You can eat it with any mral.",
               "price":10.00,
               "review":85,
               "stars":0,
               "category":"",
               "meal":""
          },
             {
               "id":2,
               "name":"Paneer Makhani Pizza",
               "image":"https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
               "description":"This is a great green salad that is very healthy.You can eat it with any mral.",
               "price":20.00,
               "review":35,
               "stars":0,
               "category":"",
               "meal":""
          },
           {
               "id":3,
               "name":"Egg Noodles",
               "image":"https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
               "description":"This is a great green salad that is very healthy.You can eat it with any mral.",
               "price":30.00,
               "review":86,
               "stars":0,
               "category":"",
               "meal":""
          },
           {
               "id":4,
               "name":"Grilled Chicken Sandwich",
               "image":"https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
               "description":"This is a great green salad that is very healthy.You can eat it with any mral.",
               "price":40.00,
               "review":35,
               "stars":0,
               "category":"",
               "meal":""
          },
           {
               "id":5,
               "name":"Veggie Paradise Pizza",
               "image":"https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
               "description":"This is a great green salad that is very healthy.You can eat it with any mral.",
               "price":50.00,
               "review":33,
               "stars":0,
               "category":"",
               "meal":""
          },
           {
               "id":6,
               "name":"Portobello mushroom burger",
               "image":"https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
               "description":"This is a great green salad that is very healthy.You can eat it with any mral.",
               "price":10.00,
               "review":97,
               "stars":0,
               "category":"",
               "meal":""
          },
     ]
  return (
     <div className='w-screen lg:px-36'>
        {/* <h2> Multiple items </h2> */}
     
              <Slider {...settings} className="gap-5">
            {specialMenuItems.map((dish) => {
                 return <div key={dish.id} className='shadow-lg rounded relative mt-40 border border-gray-100'>
                      <div className='flex justify-center items-center '>
                           <img src={dish.image} className='w-60 h-60 rounded-full object-cover absolute -top-28 border-4 border-orange shadow-lg' />
                      </div>
        
                      <div className='p-4 mt-32'>
                           <p className='text-lg font-bold text-black text-center '>{dish.name}</p>
                           <div className='flex flex-row justify-center mt-5'>
                                <div>{dish.stars}</div><p className='text-Gray'>({dish.review})</p>
             
             
                           </div>
                           <p className=' mt-5'>{dish.description}</p>
                           <div className='flex justify-between mt-5 '>
                                <p className='text-black border border-black rounded-full py-2 w-24 text-center '>{dish.price}</p>
                                <button className='px-3 py-1 bg-orange text-white rounded-full'>Buy Now</button>
                           </div>
                      </div>
      
                 </div>
            } )}</Slider>
      </div>
  )
}
