import FormGroup from '@/components/Input/FormGroup'
import Input from '@/components/Input/Input'
import Typography from '@/components/Typography/Typography'
import Button from '@/components/Buttons'
import InputPassword from '@/components/Input/inputPassword'
import React, { useState } from 'react'
import Card from './cardRegister'

const Register = () => {
  return (
    <div className='w-screen h-screen flex flex-col md:flex-row' style={{ backgroundImage: "url('/bgRegist.png')" }}>
      <div className='w-full md:w-[20%]'></div>
      <div className='w-full md:w-[80%] bg-[#1E1E1E]'>
        <div className='py-8 px-4 md:py-16 md:px-12'>
          <div className='flex flex-col md:flex-row items-center pb-6 md:pb-10'>
            <div className='mr-4'><img src="/CheckIcon.png" alt="Check Icon" /></div>
            <Typography variant="Header" size="xl" className="text-primary font-bold text-white">
              Pembayaran Course
            </Typography>
          </div>
          
          <Typography variant="Paragraph" size="base" className='text-[#83817A] mb-6'>
            Selanjutnya, selesaikan pembayaran anda melalui jalur berikut:
          </Typography>

          <div className='flex flex-col md:flex-row gap-8 md:gap-14 py-8 mb-10'>
            <div className='border-2 border-white rounded-lg w-full md:w-[45%] py-8 px-6 md:py-12 md:px-8'>
              <Typography variant="Header" size="lg" className='text-white font-bold mb-6'>
                Rincian Harga
              </Typography>
              
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <Typography variant="Header" size="sm" className='text-white'>
                    Dasar Pemrograman
                  </Typography>
                  <Typography variant="Header" size="sm" className='text-white font-semibold'>
                    Rp. 000.000
                  </Typography>
                </div>
                <div className='flex justify-between'>
                  <Typography variant="Header" size="sm" className='text-white'>
                    Machine Learning
                  </Typography>
                  <Typography variant="Header" size="sm" className='text-white font-semibold'>
                    Rp. 000.000
                  </Typography>
                </div>
                <div className='flex justify-between'>
                  <Typography variant="Header" size="sm" className='text-white'>
                    Microcontroller
                  </Typography>
                  <Typography variant="Header" size="sm" className='text-white font-semibold'>
                    Rp. 000.000
                  </Typography>
                </div>
              </div>
              
              <div className='flex justify-between mt-6'>
                  <Typography variant="Header" size="sm" className='text-[#FADE3D] font-semibold'>
                    TOTAL HARGA
                  </Typography>
                  <Typography variant="Header" size="sm" className='text-[#FADE3D] font-semibold'>
                    Rp. 000.000
                  </Typography>
                </div>
            </div>

            <div className='border-2 border-white rounded-lg w-full md:w-[45%] py-8 px-6 md:py-12 md:px-8'>
              <Typography variant="Header" size="lg" className='text-white font-bold mb-6'>
                <span className='text-[#E13B11]'>*</span> Metode Pembayaran
              </Typography>

              <div className='py-4 flex flex-col gap-4'>
                <Typography variant="Header" size="sm" className='text-white'>
                  Nama Bank
                </Typography>
                <Typography variant="Header" size="sm" className='text-white'>
                  97382XXXXXXXXXX
                </Typography>
                <Typography variant="Header" size="sm" className='text-white'>
                  Nama Pemilik nomor rekening
                </Typography>
              </div>

              <Typography variant="Header" size="sm" className='text-[#E13B11] mt-4'>
                *Mohon diperhatikan nominal pembayaran,dan rekening pembayaran diatas sebelum konfirmasi
              </Typography>
            </div>
          </div>

          <Button
            type='submit'
            variant='default'
            className='w-full md:w-64 mt-6'
          >
            Konfirmasi Pembayaran
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Register
