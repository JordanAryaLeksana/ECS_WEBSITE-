import FormGroup from '@/components/Input/FormGroup'
import Input from '@/components/Input/Input'
import Typography from '@/components/Typography/Typography'
import Button from '@/components/Buttons'
import InputPassword from '@/components/Input/inputPassword'
import React, { useState } from 'react'
import Card from './cardRegister'
import * as Yup from 'yup'
import Link from 'next/link'
const Register = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const validationSchema = Yup.object().shape({
    NamaLengkap: Yup.string().required('Name is Required'),
    Email: Yup.string().email().required('Email is required'),
    NRP: Yup.string()
      .required('Number is required')
      .matches(/^[0-9]+$/, 'NRP must be a number'),
    Password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    ConfirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("Password")], "Confirm password does not match"),
  })

  const courses = [
    {
      title: 'Dasar Pemrograman',
      price: 'Rp. 000,000',
      icon: '/PemrogramanIcon.svg',
    },
    {
      title: 'Machine Learning',
      price: 'Rp. 000,000',
      icon: '/MLIcon.svg',
    },
    {
      title: 'Micro controller',
      price: 'Rp. 000,000',
      icon: '/MicroIcon.svg',
    },
  ];

  const handleCardClick = (title: string) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.includes(title)
        ? prevSelectedCourses.filter((course) => course !== title)
        : [...prevSelectedCourses, title]
    );
  };

  return (
    <div className='w-full h-full flex flex-col md:flex-row' style={{ backgroundImage: "url('/bgRegist.png')" }}>
      <div className='w-full md:w-[20%]'></div>
      <div className='w-full md:w-[80%] bg-primary-normal-normal'>
        <div className='py-10 px-4 md:py-20 md:px-16'>
          <Typography variant="Header" size="3xl" className="text-primary font-bold text-AddsOn-neutral pb-2">
            Registrasi EPTA 2024
          </Typography>
          <Typography variant="Paragraph" size="base" className='text-secondary-dark-dark'>
            Sudah punya akun? <span className='text-AddsOn-neutral'><Link href="/epta/login">Login</Link></span>
          </Typography>

          <div className='flex flex-col pt-10 md:pt-20'>
            <div>
              <FormGroup
                initialValues={{
                  NamaLengkap: '',
                  NRP: '',
                  Email: '',
                  Password: '',
                  ConfirmPassword:'',
                }}
                onSubmit={() => console.log('submit')}
                className='flex flex-col gap-4 md:gap-6'
                validationSchema={validationSchema}
              >
                <div className='flex flex-col md:flex-row gap-4 md:gap-20'>
                  <div className='w-full md:w-[40%]'>
                    <Input
                      label='Nama Lengkap'
                      type='text'
                      name='NamaLengkap'
                      placeholder='Isi nama lengkap anda'
                    />
                    <Input
                      label='NRP'
                      type='text'
                      name='NRP'
                      placeholder='cth. 50092XXXXX'
                      maxLength={10}
                    />
                    <Input
                      label='Email'
                      type='text'
                      name='Email'
                      placeholder='cth. xyz@domain.com'
                    />
                    <InputPassword
                      label='Password'
                      required
                      name='Password'
                      placeholder='Masukkan kata sandi lebih dari 8 kata'
                    />
                    <InputPassword
                      label='Konfirmasi Password'
                      required
                      name='ConfirmPassword'
                      placeholder='Masukkan kata sandi lebih dari 8 kata'
                    />
                    <Button
                      type='submit'
                      variant='default'
                      className='w-full md:w-36 mt-10'
                    >
                      Registrasi
                    </Button>
                  </div>
                  <div className='w-full md:w-[40%]'>
                    <Typography variant="Header" size="xs" className="text-primary font-bold text-AddsOn-neutral pb-2">
                      Pilih course yang ingin ditempuh:
                    </Typography>

                    <div className="flex flex-wrap gap-4">
                      {courses.map((course) => (
                        <Card
                          key={course.title}
                          title={course.title}
                          price={course.price}
                          icon={course.icon}
                          selected={selectedCourses.includes(course.title)}
                          onClick={() => handleCardClick(course.title)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
