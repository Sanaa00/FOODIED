import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addSearchHandler from "../../redux/features/api/searchSlice"
function Search() {
     const dispatch=useDispatch()
     const search = useSelector((state:RootStateSearch) => state.search.search)
     console.log("search", search)
     const searchingHandler = (param:string) => {
          // dispatch(addSearchHandler(param))
          console.log("param",param)
     }
  return (
       <input
            onChange={(e) =>
                 searchingHandler(e.target.value)
            }
            placeholder='Search'
       className='hover:scale-105 hover:border-orange duration-500 my-5 pl-2 border-2 border-gray-4 rounded focus:outline-none focus:border-orange focus:duration-500  hover:duration-500 py-2 w-96'/>
  )
}

export default Search

