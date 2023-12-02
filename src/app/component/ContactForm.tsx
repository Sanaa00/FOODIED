'use client'
import React from 'react'
import { Formik, Form } from 'formik'
import InputFeild from './InputFeild'
import * as Yup from 'yup'
import { useAddContactMutation } from '@/redux/features/api/contact'

export default function ContactForm() {
  const [addContact, { isLoading }] = useAddContactMutation()
  const ContactSchemaValidation = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string()
      .min(30, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })

  return (
    <div className=''>
      <p className='text-black font-bold text-3xl mt-10 leading-[5rem] text-center'>
        GET IN TOUCH
      </p>
      <Formik
        validationSchema={ContactSchemaValidation}
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        onSubmit={(values: Values, { resetForm }) => {
          addContact(values)
          resetForm()
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form className='flex flex-col items-center'>
            <InputFeild
              onChange={handleChange}
              value={values.name}
              id='name'
              name='name'
              placeholder='Your name'
              type='text'
              htmlFor='name'
            />
            <div
              className={`${
                errors.name && touched.name ? 'block' : ' hidden'
              } text-xs text-red-400 flex justify-start w-full duration-500 transition`}
            >
              {errors.name}
            </div>
            <InputFeild
              onChange={handleChange}
              value={values.email}
              id='email'
              name='email'
              placeholder='example@gmail.com'
              type='email'
              htmlFor='email'
            />
            <div
              className={`${
                errors.email && touched.email ? 'block' : 'hidden'
              } text-xs text-red-400 flex justify-start w-full duration-500 transition`}
            >
              {errors.email}
            </div>
            <InputFeild
              onChange={handleChange}
              value={values.subject}
              id='subject'
              name='subject'
              placeholder='subject'
              type='text'
              htmlFor='subject'
            />
            <div
              className={`${
                errors.subject && touched.subject ? 'block' : 'hidden'
              } text-xs text-red-400 flex justify-start w-full duration-500 transition`}
            >
              {errors.subject}
            </div>
            <InputFeild
              onChange={handleChange}
              value={values.message}
              id='message'
              name='message'
              placeholder='Write your message'
              type='text'
              htmlFor='message'
            />
            <div
              className={`${
                errors.message && touched.message ? 'block' : 'hidden'
              } text-xs text-red-400 flex justify-start w-full duration-500 transition`}
            >
              {errors.message}
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='mt-5 px-6 py-2 bg-orange text-white rounded-full duration-500 hover:duration-500 hover:ease-in-out hover:bg-opacity-60 hover:shadow-md'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
