import React from 'react'

type Props = {
  
               "id":number,
               "name":string,
               "image":string,
               "description":string,
               "price":number,
               "review":number,
               "stars":number,
               "category":string,
               "meal":string
          
}

export default async function getAllItemMenu() {
  const data=await fetch('http://localhost:8000/dishes')
  return data.json()
}