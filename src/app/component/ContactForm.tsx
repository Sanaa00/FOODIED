"use client"

import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import InputFeild from './InputFeild';
 import * as Yup from 'yup';

export default function ContactForm() {
      const ContactSchemaValidation = Yup.object().shape({
   fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   subject: Yup.string().required('Required'),
   message: Yup.string().min(30, 'Too Short!')
     .max(150, 'Too Long!').required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

  return (
       <div className=''>
         <p className='text-black font-bold text-3xl mt-10 leading-[5rem] text-center'>GET IN TOUCH</p>
            <Formik
                 validationSchema={ContactSchemaValidation}
        initialValues={{
          fullName: '',
          email: '',
          subject: '',
          message:""
        }}
        onSubmit={(
          values: Values,
        ) => {
             console.log(values)
       
        }}
      >
                 {({ errors, touched }) => (<Form className='flex flex-col items-center'>
                      <InputFeild id="fullName" name="fullName" placeholder="Your name" type="text" htmlFor="fullName"/>
                      <div className={`${(errors.fullName && touched.fullName)?"block":" hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.fullName}</div>
                      <InputFeild id="email" name="email" placeholder="example@gmail.com" type="email" htmlFor="email" />
                      <div  className={`${(errors.fullName && touched.fullName)?"block":"hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.email}</div>
                      <InputFeild id="subject" name="subject" placeholder="subject" type="text" htmlFor="subject" />
                       <div  className={`${(errors.fullName && touched.fullName)?"block":"hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.subject}</div>
                      <InputFeild id="message" name="message" placeholder="Write your message" type="text" htmlFor="message" />
                       <div  className={`${(errors.fullName && touched.fullName)?"block":"hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.message}</div>

                      <button type="submit" className='mt-5 px-6 py-2 bg-orange text-white rounded-full duration-500 hover:duration-500 hover:ease-in-out hover:bg-opacity-60 hover:shadow-md'>Submit</button>
                 </Form>)}
      </Formik>
    </div>
  )
}
