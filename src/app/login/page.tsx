'use client'
import React, { useEffect } from 'react'
import InputFeild from '../component/InputFeild'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useLoginMutation } from '@/redux/features/api/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addUser } from '@/redux/features/api/userSlice'
function Page() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [login, { data: loginData, isError, isLoading, isSuccess, error }] =
    useLoginMutation()
  console.log('error', isError, error)
  const loginSchemaValidation = Yup.object().shape({
    password: Yup.string().min(6).required('Required'),
    username: Yup.string().required('Required'),
  })

  const initialValues = {
    password: '',
    username: '',
  }

  useEffect(() => {
    if (!isError && !error && loginData && typeof window !== 'undefined') {
      localStorage.setItem('access_token', loginData?.token)
      localStorage.setItem('user_data', JSON.stringify(loginData.data))
      dispatch(addUser(loginData?.data))
    }
    dispatch(addUser(loginData?.data))
  }, [dispatch, error, isError, loginData])

  if (typeof window !== 'undefined') {
    // Code using localStorage
    if (localStorage.getItem('access_token')) {
      router.push('/home')
    }
  }

  if (loginData && isSuccess) {
    router.push('/home')
  }
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('user_data')) {
      dispatch(addUser(loginData?.data))
    }
  }, [dispatch, loginData?.data])
  return (
    <div className='min-h-screen flex flex-col justify-center items-center  w-full'>
      <div className=' bg-gray-100 shadow bg-opacity-30 bg-blur flex flex-col items-center p-4 w-fit'>
        <p className='text-neutral-700 font-semibold'> welcome back again !</p>
        <Formik
          validationSchema={loginSchemaValidation}
          initialValues={initialValues}
          onSubmit={values => {
            login(values)
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form className='flex flex-col  items-center'>
              <InputFeild
                onChange={handleChange}
                value={values.username}
                id='username'
                name='username'
                placeholder='username'
                type='text'
                htmlFor='username'
              />
              <div
                className={`${
                  errors.username && touched.username ? 'block' : ' hidden'
                } text-xs text-red-400 flex justify-start w-full duration-500 transition`}
              >
                {errors.username}
              </div>
              <InputFeild
                onChange={handleChange}
                value={values.password}
                id='password'
                name='password'
                placeholder='*******'
                type='text'
                htmlFor='password'
              />
              <div
                className={`${
                  errors.password && touched.password ? 'block' : 'hidden'
                } text-xs text-red-400 flex justify-start w-full duration-500 transition`}
              >
                {errors.password}
              </div>
              {error && 'data' in error ? (
                <div className='text-xs text-red-400 flex w-full duration-500 transition'>
                  User already exists
                </div>
              ) : null}
              <div className='text-sm w-full text-start'>
                do you have account ? <Link href='signUp'>signup</Link>
              </div>
              <button
                disabled={isLoading}
                type='submit'
                className='mt-5 px-6 py-2 bg-orange text-white rounded-full duration-500 hover:duration-500 hover:ease-in-out hover:bg-opacity-60 hover:shadow-md'
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Page
