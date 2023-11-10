import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useResponsive from '@/components/useResponsive'
import { duration } from '@mui/material'
import {InfinitySpin} from "react-loader-spinner"
import Head from 'next/head'
const loadingContainer = {
  display: "flex"
  ,
  width: "2rem"
  ,
  height: "2rem",
  justifyContent: "space-around"
}
const loadingCircle = {
  display: "block"
  ,
  width: "0.5rem"
  ,
  height: "0.5rem",
  backgroundColor: "black",
  borderRadius: "0.25rem"

}
const loadingCircleVariants = {
  start: {
    y: "0%"

  },
  end: {
    y: "100%"
  }
}
const loadingCircleTransition = {
  duration:1,
  yoyo: Infinity,
  ease: "easeInOut"
}
const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1
    }
  },
  end: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
const Home = () => {
  const { isDesktop, isMobile } = useResponsive()
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 2000);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );
  return (
    show ?
      <div >
      <Head><title>ecs-laboratory</title></Head>
        <Navbar></Navbar>
        <div className='flex flex-row justify-center w-full items-center lg:px-20 sm:px-10  min-h-screen' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat' }}>
          {
            isDesktop ?
              <div className='border-dashed border-[3px] py-20 px-10 border-black/30 flex flex-row  justify-center items-center '>
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, ease: 'easeInOut' }} width={380} height={380} src="/ecswarna.png" alt="" />
                <div className='flex flex-col gap-6 w-[800px]'>
                  <h1 className='text-kuning font-extrabold text-[40px]' style={{ WebkitTextStroke: '1px gray' }}>EMBEDDED & CYBER PHYSICAL SYSTEM LABORATORY</h1>
                  <h1 className='font-semibold'>Merupakan laboratorium yang menghubungkan gagasan penelitian terbaru berbasis fisika dengan pengembangan produk atau proses dalam format <span className='font-light'>embedded system </span> dan skema <span className='font-light'>internet-of-things</span>.</h1>
                  <div className='flex flex-row gap-4'>
                    <Link className='px-6 py-2 rounded-2xl bg-white' href={'/about'} >About</Link>
                    <Link className='px-6 py-2  rounded-2xl bg-gray-800 text-kuning' href={'/oprec'}>Join Us</Link>
                  </div>
                </div>

              </div>
              :
              <div className='border-dashed  py-20 px-10 border-black/30 flex flex-col  justify-center items-center '>
                <motion.img initial={{ y: 0 }} animate={{ y: 0 }} width={250} height={250} src="/ecswarna.png" alt="" />
                <div className='flex flex-col gap-6 w-full'>
                  <h1 className='text-kuning font-extrabold text-[32px]' style={{ WebkitTextStroke: '1px gray' }}>EMBEDDED & CYBER PHYSICAL SYSTEM LABORATORY</h1>
                  <h1 className='font-semibold'>Merupakan laboratorium yang menghubungkan gagasan penelitian terbaru berbasis fisika dengan pengembangan produk atau proses dalam format <span className='font-light'>embedded system </span> dan skema <span className='font-light'>internet-of-things</span>.</h1>
                  <div className='flex flex-row gap-4'>
                    <Link className='px-6 py-2 rounded-2xl bg-white' href={'/about'} >About</Link>
                    <Link className='px-6 py-2  rounded-2xl bg-gray-800 text-kuning' href={'/oprec'}>Join Us</Link>
                  </div>
                </div>

              </div>
          }


        </div>

      </div>
      :
      <motion.div transition={{ duration: 1 }} animate={{ y: 0 }} initial={{ y: 0 }} exit={{ y: '-100%' }} className='w-full h-screen flex justify-center items-center'>
      <InfinitySpin 
  width='200'
  color='black'
  
/>
      </motion.div>
  )
}

export default Home