
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const NavbarItem = () => {
  return (
    <>
      <div className="flex justify-evenly gap-10 items-center absolute bg-AddsOn-gray w-[428px] h-[68px] top-6 right-1/2 translate-x-[205px] rounded-full">
        <div className="flex items-center gap-10">
          <Link href='/' className='cursor-pointer'>
            <Image className="" src="/Frame 136.svg" alt="logo-image" width={50} height={50} />
          </Link>
          <Link href='/about/page' className='cursor-pointer'>
            <Image className="" src="/user.svg" alt="logo" width={30} height={30} />
          </Link>
          <Link href='/' className='cursor-pointer'>
            <Image className="" src="/artboard.svg" alt="logo" width={30} height={30} />
          </Link>
        </div>
        <Link href='/' className='cursor-pointer'>
          <div className="flex px-4 py-2 bg-white rounded-full">
            <h1 className="">React Us</h1>
          </div>
        </Link>
        <Image alt="logo" src="/Ellipse 2.svg" width={100} height={120} className="absolute left-1/2 translate-x-[5.2rem] z-[-1]" />
      </div>
    </>
  )
}

export default NavbarItem