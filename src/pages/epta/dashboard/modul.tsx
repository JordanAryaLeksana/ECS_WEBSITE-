import DashboardLayout from '@/components/DashboardComponents/dashboardLayout'
import Typography from '@/components/Typography/Typography'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Modul = () => {
  return (
    <DashboardLayout>
      <div className='w-full h-full lg:ml-[20px] mt-[40px] flex-col '>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full  bg-[#1B1B1B] rounded-xl'>
            <Link href="/"> 
              <div className='h-[130px] flex flex-col justify-between py-5 px-6 rounded-t-xl' style={{ backgroundImage: "url('/PemrogramanModul.png')" }}>
                <div>
                  <Typography variant='Header' size='lg' className='text-AddsOn-neutral font-bold' >Dasar Pemrograman</Typography>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >2024</Typography>
                </div>
                <div>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >TEAM ECS</Typography>
                </div>
              </div>
            </Link> 
            <div className='h-[110px]'>
              
            </div> 
            <hr className='border-white border-1' />
            <div className='h-[60px]'>
              <div className='h-[100%] flex flex-row justify-end items-center gap-6 px-6 '>
                <Link href="/"><Image src="/Document.svg" alt="logo 1"  width={20} height={20}/></Link>
                <Link href="/"><Image src="/Download.svg" alt="logo 2" width={20} height={20}/></Link>
              </div>
            </div>
          </div>

          <div className='w-full  bg-[#1B1B1B] rounded-xl'>
            <a href="">
              <div className='h-[130px] flex flex-col justify-between py-5 px-6 rounded-t-xl' style={{ backgroundImage: "url('/MLModul.png')" }}>
                <div>
                  <Typography variant='Header' size='lg' className='text-AddsOn-neutral font-bold' >Machine Learning</Typography>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >2024</Typography>
                </div>
                <div>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >TEAM ECS</Typography>
                </div>
              </div>
            </a>
            <div className='h-[110px]'>
              
            </div>
            <hr className='border-white border-1' />
            <div className='h-[60px]'>
              <div className='h-[100%] flex flex-row justify-end items-center gap-6 px-6 '>
                <Link href=""><Image src="/Document.svg" alt="logo 3" width={20} height={20} /></Link>
                <Link href=""><Image src="/Download.svg" alt="logo 4"  width={20} height={20}/></Link>
              </div>
            </div>
          </div>

          <div className='w-full  bg-[#1B1B1B] rounded-xl'>
            <Link href="">  
              <div className='h-[130px] flex flex-col justify-between py-5 px-6 rounded-t-xl' style={{ backgroundImage: "url('/MicroModul.png')" }}>
                <div>
                  <Typography variant='Header' size='lg' className='text-AddsOn-neutral font-bold' >Microcontroller</Typography>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >2024</Typography>
                </div>
                <div>
                  <Typography variant='Header' size='xs' className='text-AddsOn-neutral' >TEAM ECS</Typography>
                </div>
              </div>
            </Link>
            <div className='h-[110px]'>
              
            </div>
            <hr className='border-white border-1' />
            <div className='h-[60px]'>
              <div className='h-[100%] flex flex-row justify-end items-center gap-6 px-6'>/
                <Link href=""><Image src="/Document.svg" alt="logo 6" width={20} height={20} /></Link>
                <Link href=""><Image src="/Download.svg" alt="logo 7"  width={20} height={20}/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Modul
