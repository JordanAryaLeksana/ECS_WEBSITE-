import React from 'react'
import { Formik, Form } from 'formik'
import Input from '@/components/Input/Input'
import { HiArrowCircleDown, HiMail, HiOutlineLightningBolt, HiStatusOnline } from 'react-icons/hi'
import * as Yup from 'yup';


const Payment = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    nrp: Yup.number().required("Number is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirm_password: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Confirm password does not match"),
  });
  return (
    <div className='w-screen h-screen   bg-AddsOn-gray'>
      <Formik
        initialValues={{
          username: "",
          NRP: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Form className=''>
          <Input
            name='username'
            label='username'
            prefix={<HiArrowCircleDown size={20} />}
            placeholder='Please Input YourName'
            type='text'
            maxLength={10}
            helpertext={
              <span className="">

                Fill The Username

              </span>
            }
          />
          <Input
            name='nrp'
            label='NRP'
            prefix={<HiStatusOnline size={20} />}
            placeholder='Please Input YourNRP'
            type='text'
            maxLength={10}
            helpertext={
              <span>
                Fill The NRP
              </span>
            }
          />
          <Input
            name='email'
            label='email'
            prefix={<HiMail size={20} />}
            placeholder='Please Input YourName'
            type='email'
            helpertext={
              <span>
                Fill The Email
              </span>
            }
          />

          <Input
            name='password'
            type='text'
            label='Password'
            placeholder='Please Input YourPassword'
            helpertext={
              <span>
                Fill The Password
              </span>
            }
            prefix={<HiOutlineLightningBolt size={20}/>}
            tabIndex={2}
          />
          <Input
            name='confirm_password'
            type='password'
            label='Password'
            placeholder='Please Confirm YourPassword'
            helpertext={
              <span>
                Fill The Password
              </span>
            }
            prefix={<HiOutlineLightningBolt size={20}/>}
            tabIndex={2}
          />
        </Form>
      </Formik>




       {/* kalo bisa yang 24 diarahkan untuk ikut epta, target peserta 20 maksimal 40 kecuali dasprog 50, di p-105 sekalian mau tanda tangan pengesahan proposal dan peminjaman ruangan, dibagi 3 modul dengan pemateri pak andi dan para asisten lab dengan materi machine learning, micrcontroller, dasprog c++, minggu pertaama pengenalan, minggu kedua materi lanjut + praktikum, minggu ketiga final test, surat peminjaman butuh tanda tangan, surat pernyataan minimal minta kepala lab, koor lab, ketua epta, willy sebagai pic peminjaman    */}
    </div>
  )
}

export default Payment