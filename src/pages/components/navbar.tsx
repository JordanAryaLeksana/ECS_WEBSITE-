import Link from 'next/link'
import React, { useState } from 'react'
import useResponsive from '@/components/useResponsive'
import {RiMenu4Fill} from 'react-icons/ri'
import {IoMdClose}  from 'react-icons/io'
const Navbar = () => {
  const {isDesktop} = useResponsive()
  const [open, setOpen] = useState(false)
  return (
    
      isDesktop?
      <div className='bg-black/75 w-full h-fit justify-between flex-row flex py-4 px-10 items-center'>
        <Link href={'/'}  className='flex flex-row items-center gap-4'>
            <img className='w-14 h-14' src="/ecs.png" alt="" />
            <h1 className='text-kuning font-bold text-xl' >ECS Laboratory</h1>
        </Link>
        <div className='flex flex-row items-center gap-10 text-kuning'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href={'/oprec'}>Oprec</Link>

        </div>

    </div>
      :
      <div>
      <div className='bg-black/75 w-full h-fit justify-between items-center flex-row flex py-4 px-6'>
      <Link href={'/'}  className='flex flex-row items-center gap-4'>
          <img className='w-10 h-10' src="/ecs.png" alt="" />
          <h1 className='text-kuning font-bold ' >ECS Laboratory</h1>
      </Link>
      <button onClick={()=>setOpen(!open)}>
      <RiMenu4Fill size={25} color={'white'}>
      </RiMenu4Fill></button>
      
  </div>
  {
    open && 
    <div className='w-full h-fit absolute left-0 top-0 z-[9999] items-center text-center bg-white'>
    <div className='bg-black/75 w-full h-fit justify-between items-center flex-row flex py-4 px-6'>
      <Link href={'/'}  className='flex flex-row items-center gap-4'>
          <img className='w-10 h-10' src="/ecs.png" alt="" />
          <h1 className='text-kuning font-bold ' >ECS Laboratory</h1>
      </Link>
      <button onClick={()=>setOpen(!open)}>
      <IoMdClose size={25} color={'white'}></IoMdClose></button>
      
  </div>
    <div className='flex flex-col items-center gap-8 text-center py-14 bg-black/80 text-white'>
    <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href={'/oprec'}>Oprec</Link>
    </div></div>
  }

  
      </div>
     
    
  )
}

export default Navbar