"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearch } from '@/redux/features/api/searchSlice'
function Search() {
     const dispatch=useDispatch()
     const search = useSelector((state: RootStateSearch) => state.search.search)
     console.log("s",search)
     const searchHandler =(arg:string) => {
         dispatch(addSearch(arg))
     }
  return (
       <input
            onChange={(e) => searchHandler(e.target.value)}
            placeholder='Search'
          //   value={search}
       className='hover:scale-105 hover:border-orange duration-500 my-5 pl-2 border-2 border-gray-4 rounded focus:outline-none focus:border-orange focus:duration-500  hover:duration-500 py-2 w-96'/>
  )
}

export default Search

