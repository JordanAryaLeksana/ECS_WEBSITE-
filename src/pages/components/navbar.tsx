import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black/75 w-full h-fit justify-between flex-row flex py-4 px-10'>
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
  )
}

export default Navbar