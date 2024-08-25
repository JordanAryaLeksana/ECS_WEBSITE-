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
      <div className='flex flex-col sm:ml-[40px] sm:mt-[45px]'>
        <Typography variant='Paragraph' size='lg' className='text-AddsOn-neutral font-normal mb-6 sm:text-2xl leading-[36px]'>
          Sertifikat
        </Typography>
        {isTrainingComplete ? (
          <div className='flex flex-col sm:flex-row sm:items-center w-full sm:max-w-[912px] h-[70px] sm:h-[94px] rounded-[24px] border-b border-[#000000] bg-[#1E1E1E] sm:p-5'>
          <div className='flex sm:items-center w-full sm:w-auto'>
            <div>
            <Image src='/logo unduh.svg' alt='icon' width={29} height={29} className='ml-4 sm:mr-8 sm:mb-0 sm:w-[44px] sm:h-[44px] mt-1' />
            </div>
            <div className='flex flex-col ml-4 sm:ml-8'>
              <Typography variant='Paragraph' size='xs' className='font-semibold text-AddsOn-neutral whitespace-nowrap sm:text-lg sm:leading-[27px] mt-[2px]'>
                Andre Alfa Jones Rawang
              </Typography>
              <Typography variant='Paragraph' size='xs' className='text-AddsOn-neutral sm:font-light font-normal sm:text-sm sm:leading-[21px] leading-[24px]'>
                Sertifikat
              </Typography>
            </div>
          </div>
          <div className='sm:ml-auto sm:mt-0 sm:mr-10 mx-[60px] '>
            <Link href={'/'}>
              <Typography variant='Paragraph' size='xs' className='text-primary-light-active underline sm:hidden'>
                Download
              </Typography>
              <Image src='/download icon.svg' alt='icon' width={24} height={24} className='hidden sm:block' />
            </Link>
          </div>
        </div>        
        ) : (
          <div className='w-full max-w-[912px] h-[21px] flex sm:items-center'>
            <Typography variant='Paragraph' size='sm' className='text-primary-light-active font-normal'>
              Anda belum menyelesaikan course anda
            </Typography>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Sertifikat;
