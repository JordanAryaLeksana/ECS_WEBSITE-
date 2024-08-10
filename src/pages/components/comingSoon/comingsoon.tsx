
import Image from 'next/image'
import React from 'react'
import Button from '../button'

const ComingSoon = () => {
  return (
    <div className='h-screen w-screen bg-primary-normal-normal relative'>
      <Image src={`/BG-1REV.png`} alt='bg-1' className='' fill />
      <div className='relative  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[440px] flex flex-col  w-full max-w-lg rounded-3xl justify-center items-center gap-10 bg-AddsOn-gray/30  border border-AddsOn-neutral'>
        <Image src={`/tool.svg`} alt='tool' width={100} height={100} />
        <div className='flex flex-col gap-5 justify-center items-center '>
          <p className='font-Inter text-sm text-AddsOn-neutral '>We’re Still</p>
          <h1 className='font-Poppins text-3xl  font-black text-AddsOn-neutral'>COOKING OUR WEBSITE</h1>
          <div className='flex flex-col gap-2'>

            <p className='font-Inter text-sm text-AddsOn-neutral text-center'>It seems like our page is under development.
            </p>
            <p className='font-Inter text-sm font-normal text-AddsOn-neutral text-center'>While we’re at it, go check our other stuff!</p>
          </div>
        </div>
        <div className=' flex gap-3'>
          <Button type='primary' className=''>
            <h1 className='text-AddsOn-gray'>Home</h1>
            <Image src={`/logout.svg`} alt='logout' width={30} height={30} className='text-AddsOn-gray' />
          </Button>
          <Button type='secondary'>
            <h1 className='text-AddsOn-white'>Instagram</h1>
            <Image src={`/Social icon-instagram.svg`} alt='icon' width={30} height={30} className='' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon