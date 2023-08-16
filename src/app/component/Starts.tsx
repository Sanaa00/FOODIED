import React from 'react'
import ReactStars from 'react-stars'
export default function Starts({count}:starCount) {
  return (
       <ReactStars
            Value={count}
            count={5}
            edit={false}
            half={true}
            size={24}
            color1={'#FDCC0D'}
            color2={'#ffd700'} />
  )
}
