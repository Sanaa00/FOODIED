"use client"
import React, { useEffect } from 'react'
import InputFeild from '../component/InputFeild'
import { Form, Formik, useFormik } from 'formik'
import * as Yup from "yup";
import { useLoginMutation } from '@/redux/features/api/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/redux/features/api/userSlice';
function Page() {
  const router = useRouter();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  console.log("userrrrrrrrrrrrrrr",user)
     // eslint-disable-next-line react-hooks/rules-of-hooks
  const [login, { data: loginData, isError, isLoading, isSuccess, error }] = useLoginMutation()
  console.log("here", loginData?.user)
  
  // loginData && localStorage.setItem("userData", loginData)
  // const storedUser =loginData && JSON.parse(localStorage.getItem('userData'));
  // console.log("user data",localStorage.getItem('userData'))
  // console.log(storedUser)
  //    console.log(loginData,isError,isLoading,isSuccess,error)
       const loginSchemaValidation = Yup.object().shape({
   email: Yup.string()
     .email()
     .required('Required'),
   password: Yup.string().min(6).required('Required'),
  
 });

     const initialValues = {
          password: '',
          email: '', 
  }
  
  useEffect(() => {
    if (!isError && !error && loginData )
    {
      localStorage.setItem("access_token", loginData?.token);
      
    }
   dispatch(addUser(loginData?.user))

  }, [dispatch, error, isError, loginData])
  
  if ( loginData) {
      router.push('/home');
  }
  if (localStorage.getItem("access_token")) {
    router.push('/home');
  }
  return (
       <div className='min-h-screen flex flex-col justify-center items-center  w-full'>
      {/* <div>image here  like header</div> */}
      <div className=' bg-gray-100 shadow bg-opacity-30 bg-blur flex flex-col items-center p-4 w-fit'>
        <p className='text-neutral-700 font-semibold'>  welcome back again !</p>
       
                 {/* welcome back again ! */}
                <Formik
                 validationSchema={loginSchemaValidation}
                 initialValues={initialValues}
        onSubmit={(
          values
        ) => {
            
       login(values)

       
        }}
      >
                      {({ errors, touched }) =>
                      (<Form className='flex flex-col  items-center'>
                      <InputFeild id="email" name="email" placeholder="example@gmail.com" type="text" htmlFor="email"/>
                      <div className={`${(errors.email && touched.email)?"block":" hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.email}</div>
                      <InputFeild id="password" name="password" placeholder="*******" type="text" htmlFor="password" />
                      <div  className={`${(errors.password && touched.password)?"block":"hidden"} text-xs text-red-400 flex justify-start w-full duration-500 transition`}>{errors.password}</div>
                     <div className='text-sm w-full text-start'>do you have account ? <Link href="signUp">signup</Link></div>
                      <button type="submit" className='mt-5 px-6 py-2 bg-orange text-white rounded-full duration-500 hover:duration-500 hover:ease-in-out hover:bg-opacity-60 hover:shadow-md'>Submit</button>
                 </Form>)}
      </Formik>
                 
                
            </div></div>
   
       
      
    // </div>
  )
}

export default Page
