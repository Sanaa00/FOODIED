"use client"
import { Field } from 'formik'
import React from 'react'

export default function InputFeild({id,name,placeholder,type,htmlFor}:InputProps) {
     return (
          <div className='flex flex-col hover:border-gray-600 hover:scale-105 hover:duration-500 duration-500 focus:border-orange focus:duration-500'>
            <label htmlFor={htmlFor} className='text-lg font-semibold mt-5'>Email</label>
            <Field
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            className="pl-2 border-2 border-gray-4 rounded focus:outline-none focus:border-orange focus:duration-500 hover:border-gray-600 hover:duration-500 py-2 w-96"
               />
           
          </div>
   
  )
}
