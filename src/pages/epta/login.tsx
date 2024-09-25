import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import FormGroup from '@/components/Input/FormGroup'
import * as Yup from 'yup'
import Input from '@/components/Input/Input'
import Typography from '@/components/Typography/Typography'
import Link from 'next/link'
import Button from '@/components/Buttons'
import InputPassword from '@/components/Input/inputPassword'
import { useRouter } from 'next/router'
import axios from "axios"
import Cookies from 'js-cookie'
import { useData } from '@/components/Provider/authProvider'
const Login = () => {
  const validationSchema = Yup.object().shape({
    NRP: Yup.string()
      .required('Number is required')
      .matches(/^[0-9]+$/, 'NRP must be a number'),
    Password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })
  const { userData } = useData()
  const router = useRouter()
  useEffect(() => {
    if (userData != null && userData?.payment_status === true) {

      router.push('/epta/dashboard/modul')
    }
    else if (userData != null && userData?.payment_status === false) {
      router.push('/epta/confirmation')
    }


  }, [userData])
  const [loading, setLoading] = useState(false);
  const [NRP, setNRP] = React.useState('')
  const [password, setPassword] = React.useState('')

  const HandleClick = () => {
    setLoading(true)
    axios.post('https://dzulf.pythonanywhere.com/api/auth/login/', {
      username: NRP,
      password: password,
    }).then((response: any) => {
      setLoading(false)
      Cookies.set("data", JSON.stringify(response.data), { expires: 14 });
      router.push('/epta/dashboard/modul')
    })
      .catch((error) => {
        setLoading(false)
        console.log(error)
        alert('NRP atau Password anda salah')
      })



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
            <div className='flex items-center gap-2'>
              <Typography size='base' variant='Paragraph' className='text-secondary-dark-dark'>
                Belum Punya Akun?
              </Typography>
              <Link href='/epta/register' className='text-AddsOn-neutral'>
                Daftar
              </Link>
            </div>
          </div>
          <FormGroup
            initialValues={{
              NRP: '',
              Password: '',
            }}
            onSubmit={HandleClick}
            validationSchema={validationSchema}
            className='flex flex-col gap-6'
          >
            <Input
              label='NRP'
              type='text'
              name='NRP'
              placeholder='Input Your NRP'
              maxLength={10}
              onChange={(e) => setNRP(e.target.value)}
            />
            <InputPassword
              label='Password'
              required
              name='Password'
              placeholder='Input Your Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Center the button using mx-auto */}
            <Button
              type='submit'
              variant='default'
              className='w-40 mx-auto mt-10'
            >
              {
                loading ? "Loading..." : "Login"
              }
            </Button>
          </FormGroup>
        </div>
      </div>
    </section>
  )
}

export default Login
