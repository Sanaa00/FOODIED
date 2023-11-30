'use client'
import { Field } from 'formik'
import React from 'react'

export default function InputFeild({
  id,
  name,
  placeholder,
  type,
  htmlFor,
  value,
  onChange,
}: InputProps) {
  return (
    <div className=' flex flex-col hover:border-gray-600  hover:duration-500 duration-500 focus:border-orange focus:duration-500'>
      <label htmlFor={htmlFor} className=' font-semibold mt-5 text-neutral-700'>
        {name}
      </label>
      <Field
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type={type}
        className='pl-2 border-2 border-gray-4 rounded focus:outline-none focus:border-orange focus:duration-500 hover:border-gray-600 hover:duration-500 py-2 w-96'
      />
    </div>
  )
}
