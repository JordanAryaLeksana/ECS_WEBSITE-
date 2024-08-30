import React from 'react'
import Image from 'next/image'
import FormGroup from '@/components/Input/FormGroup'
import * as Yup from 'yup'
const Login = () => {
  // const validationSchema = Yup.object().shape({
  //   NRP: Yup.number().required('number is Requires').matches(/^[0-9]+$/, "Nomor HP must be a number"),
  //   Password: Yup.string()
  //   .required('Password is required')
  //   .min(6, "Password Must Be At Least 6 Character"),
  // }) 
  return (
    <section className='bg-primary-normal-normal h-screen w-screen'>
      <Image src={`/Vector.svg`} alt='backgorund' fill objectFit='cover' className=''/>
      <div className='max-w-[549px] w-full flex justify-center items-center'>
        {/* <FormGroup initialValues={
          NRP
          Password
          }>

        </FormGroup> */}
      </div>
    </section>
  )
}

export default Login