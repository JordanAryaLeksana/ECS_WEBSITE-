import Link from "next/link"
import Image from 'next/image'
import React from 'react'
import Button from '../components/Buttons'
import { Typewriter } from 'react-simple-typewriter'
import Typography from "@/components/Typography/Typography"
import { useState } from "react"

const ComingSoon = () => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className='h-screen w-screen bg-primary-normal-normal relative '  >
      <Image src={`/Background-Default.png`} alt='bg-1' className='' fill />
      <div className='relative  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[440px] flex flex-col  w-full max-w-lg rounded-3xl justify-center items-center gap-10 bg-AddsOn-gray/30  border border-AddsOn-neutral'>
        <Image src={`/tool.svg`} alt='tool' width={100} height={100} />
        <div className='flex flex-col gap-5 justify-center items-center '>
          <p className='font-Inter text-sm text-AddsOn-neutral '>We’re Still</p>
          <span className='font-Poppins text-3xl  font-black text-AddsOn-neutral'>
            <Typewriter
              words={['COOKING OUR WEBSITE']}
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <div className='flex flex-col gap-2'>

            <p className='font-Inter text-sm text-AddsOn-neutral text-center'>It seems like our page is under development.
            </p>
            <p className='font-Inter text-sm font-normal text-AddsOn-neutral text-center'>While we’re at it, go check our other stuff!</p>
          </div>
        </div>
        <div className=' flex gap-3'>
          <Link href={`/`} >
            <Button variant="default" className='cursor-pointer' isHovered>
              <Typography variant="Paragraph" size="base">Home</Typography>
              <Image src={`/logout.svg`} alt='logout' width={30} height={30} className='text-AddsOn-gray' />
            </Button>
          </Link>
          <Link href={`https://www.instagram.com/ecs_epits?igsh=MWRvdm13YWNiNmg3bg==`} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
            <Button variant="outline" className='cursor-pointer' isHovered  >
              <Typography variant="Paragraph" size="base">Instagram</Typography>
              {isHover ? <Image src={`/Group.svg`} alt='icon' width={30} height={30} /> : <Image src={`/Social icon-instagram.svg`} alt='icon' width={30} height={30} />}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon