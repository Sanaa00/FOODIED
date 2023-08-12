"use client"

import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import InputFeild from './InputFeild';
 import * as Yup from 'yup';
import { error } from 'console';
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
          // { setSubmitting }: FormikHelpers<Values>
        ) => {
             console.log(values)
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          // //   setSubmitting(false);
          // }, 500);
        }}
      >
                 {({ errors, touched }) => (<Form className='flex flex-col items-center'>
                      <InputFeild id="fullName" name="fullName" placeholder="Your name" type="text" htmlFor="fullName"/>
                      {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}
                      <InputFeild id="email" name="email" placeholder="example@gmail.com" type="email" htmlFor="email" />
                      {errors.email && touched.email && <div>{errors.email}</div>}
                      <InputFeild id="subject" name="subject" placeholder="subject" type="text" htmlFor="subject" />
                      {errors.subject && touched.subject && <div>{errors.subject}</div>}
                      <InputFeild id="message" name="message" placeholder="Write your message" type="text" htmlFor="message" />
                      {errors.message && touched.message && <div>{errors.message}</div>}

                      <button type="submit" className='mt-5 px-6 py-2 bg-orange text-white rounded-full'>Submit</button>
                 </Form>)}
      </Formik>
    </div>
  )
}
