"use client"
// import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Form, Formik, useFormik } from 'formik'
import * as Yup from "yup";
import InputFeild from '../component/InputFeild';
import { useSignupMutation } from '@/redux/features/api/auth';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { addUser } from '@/redux/features/api/userSlice';
import { useDispatch } from 'react-redux';
// import { redirect } from 'next/dist/server/api-utils';
function Page() {
  const dispatch=useDispatch()
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signup, { data: signupData, isLoading, isError, error ,isSuccess}] = useSignupMutation()
  console.log(signupData, isLoading, isError, error)
       const signUpSchemaValidation = Yup.object().shape({
   email: Yup.string()
     .email()
     .required('Required'),
   password: Yup.string().min(6).required('Required'),
  
 });

  const initialValues = {
          firstName: "",
          lastName:"",
          password: '',
          email: '', 
  }

    useEffect(() => {
    if (!isError && !error && signupData )
    {
      localStorage.setItem("access_token", signupData?.token);
      
    }
   dispatch(addUser(signupData?.user))

  }, [dispatch, error, isError, signupData])
  if (isSuccess && !error && !isError) {
     router.push('/home');
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>

    {/* <img  className='h-screen w-full object-cover z-0 relative opacity-80' alt='foods' src='https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> */}
      {/* <div>image here  like header</div> */}
      <div className=' flex flex-col justify-center items-center z-10 top-1/4 bg-gray-100 shadow bg-opacity-30 bg-blur  h-fit rounded p-4 left-1/3'>
      <p className=' font-semibold text-neutral-700'>  Creat your account!</p>
            <div className='w-1/3'>
               
                  <Formik
                    validationSchema={signUpSchemaValidation}
                    initialValues={initialValues}
                    onSubmit={( values ) => {
                      console.log(values)
                      signup(values)

                    }}
                >
                      {({ errors, touched }) =>
                          (<Form className='flex flex-col items-center'>
                      <InputFeild id="firstName" name="firstName" placeholder="first name" type="text" htmlFor="firstName"/>
                              <div className={`${(errors.firstName && touched.firstName) ? "block" : " hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.firstName}</div>
                    <InputFeild id="lastName" name="lastName" placeholder="last name" type="text" htmlFor="lastName" />
                              <div className={`${(errors.lastName && touched.lastName)?"block":" hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.lastName}</div>
                      <InputFeild id="email" name="email" placeholder="example@gmail.com" type="text" htmlFor="email"/>
                              <div className={`${(errors.email && touched.email)?"block":" hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.email}</div>
                      <InputFeild id="password" name="password" placeholder="*******" type="text" htmlFor="password" />
                              <div  className={`${(errors.password && touched.password)?"block":"hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.password}</div>
                     
                              <button type="submit" className='mt-5 px-6 py-2 bg-orange text-white rounded-full duration-500 hover:duration-500 hover:ease-in-out hover:bg-opacity-60 hover:shadow-md'>Submit</button>
                 </Form>)}
      </Formik>
                 
                
            </div>
      
      </div>
      </div>
  )
}

export default Page
