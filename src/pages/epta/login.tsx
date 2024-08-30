import React from 'react'
import Image from 'next/image'
import FormGroup from '@/components/Input/FormGroup'
import * as Yup from 'yup'
import Input from '@/components/Input/Input'
import Typography from '@/components/Typography/Typography'
import Link from 'next/link'
import Button from '@/components/Buttons'
import InputPassword from '@/components/Input/inputPassword'

const Login = () => {
  const validationSchema = Yup.object().shape({
    NRP: Yup.string()
      .required('Number is required')
      .matches(/^[0-9]+$/, 'NRP must be a number'),
    Password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })

  const HandleClick = () => {
    window.location.href =('/epta/register')
  }
  return (
    <section className='bg-primary-normal-normal h-screen w-screen flex justify-center items-center'>
      <Image src={`/Vector.svg`} alt='background' fill objectFit='cover' className='' />
      <div className='relative bg-primary-normal-normal max-w-[549px] w-full h-full flex flex-col justify-center'>
        <div className='flex flex-col p-20 gap-10'>
          <div className='flex flex-col gap-2'>
            <Typography size='4xl' variant='Header' className='font-bold text-AddsOn-neutral'>
              Login Epta 2024
            </Typography>
            <div className='flex items-center gap-0'> 
              <Typography size='base' variant='Paragraph' className='text-secondary-dark-dark'>
                Belum Punya Akun?
              </Typography>
              <Button variant='text' size='small' className='w-14' onClick={HandleClick} >
                Daftar
              </Button>
            </div>
          </div>
          <FormGroup
            initialValues={{
              NRP: '',
              Password: '',
            }}
            onSubmit={() => console.log('submit')}
            validationSchema={validationSchema}
            className='flex flex-col gap-6'
          >
            <Input
              label='NRP'
              type='text'
              name='NRP'
              placeholder='Input Your NRP'
              maxLength={10}
            />
            <InputPassword
              label='Password'
              required
              name='Password'
              placeholder='Input Your Password'
            />
            {/* Center the button using mx-auto */}
            <Button
              type='submit'
              variant='default'
              className='w-40 mx-auto mt-10'
            >
              Login
            </Button>
          </FormGroup>
        </div>
      </div>
    </section>
  )
}

export default Login
