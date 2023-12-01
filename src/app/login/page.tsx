'use client'
import React, { useEffect } from 'react'
import InputFeild from '../component/InputFeild'
import { Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { useLoginMutation } from '@/redux/features/api/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '@/redux/features/api/userSlice'
function Page() {
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  console.log('userrrrrrrrrrrrrrr', user)

  const [login, { data: loginData, isError, isLoading, isSuccess, error }] =
    useLoginMutation()
  console.log('here login', isError, error)
  const loginSchemaValidation = Yup.object().shape({
    password: Yup.string().min(6).required('Required'),
    username: Yup.string().required('Required'),
  })

  const initialValues = {
    password: '',
    username: '',
  }

  useEffect(() => {
    if (!isError && !error && loginData) {
      localStorage.setItem('access_token', loginData?.token)
      localStorage.setItem('user_data', JSON.stringify(loginData.data))
      dispatch(addUser(loginData?.data))
    }
    dispatch(addUser(loginData?.data))
  }, [dispatch, error, isError, loginData])

  if (localStorage.getItem('access_token')) {
    router.push('/home')
  }
  if (loginData && isSuccess) {
    router.push('/home')
  }
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
              {error?.data?.message === 'Invalid credentials' && (
                <div className='text-xs text-red-400 flex justify-start w-full duration-500 transition'>
                  password or username incorrect{' '}
                </div>
              )}

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

    // </div>
  )
}

export default Page
