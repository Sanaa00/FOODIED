import React from 'react'

function Search({searchHandler}:SearchProps) {
  return (
       <input
            onChange={(e)=>searchHandler(e.target.value)}
            placeholder='Search'
       className='hover:scale-105 hover:border-orange duration-500 my-5 pl-2 border-2 border-gray-4 rounded focus:outline-none focus:border-orange focus:duration-500  hover:duration-500 py-2 w-96'/>
  )
}

export default Search
