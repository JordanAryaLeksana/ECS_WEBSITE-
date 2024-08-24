import DashboardLayout from '@/components/DashboardComponents/dashboardLayout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typography from "@/components/Typography/Typography"
import { useState } from 'react';

const Sertifikat = () => {
  const [isTrainingComplete, setIsTrainingComplete] = useState(true);
  return (
    <DashboardLayout>
      <div className='absolute top-[45px] left-[350px]'>
        <Typography variant='Paragraph' size='2xl' className='text-AddsOn-neutral font-normal'>
          Sertifikat
        </Typography>
        {isTrainingComplete ? (
          <div className='relative w-[912px] h-[94px] rounded-[24px] border-b border-[#000000]'>
            <Image src='/logo unduh.svg' alt='icon' width={44} height={44} className=' absolute top-[25px] left-[32px]' />
            <Typography variant='Paragraph' size='lg' className='font-semibold text-AddsOn-neutral absolute top-[25px] left-[124px]'>
              Andre Alfa Jones Rawang
            </Typography>
            <Typography variant='Paragraph' size='sm' className='text-AddsOn-neutral font-normal absolute top-[58px] left-[124px]'>
              Sertifikat
            </Typography>
            <Link href={'/'}>
              <Image src='/download icon.svg' alt='icon' width={24} height={24} className='absolute top-[35px] left-[826px]' />
            </Link>
          </div>
        ) : (
          <div className='relative w-[912px] h-[21px]'>
            <Typography variant='Paragraph' size='sm' className='text-primary-light-active font-normal absolute top-[40px]'>
              Anda belum menyelesaikan course anda
            </Typography>
          </div>

        )}
      </div>
    </DashboardLayout>

  );
};


export default Sertifikat