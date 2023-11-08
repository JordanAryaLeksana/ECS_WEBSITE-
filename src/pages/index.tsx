import React from 'react'
import Navbar from './components/navbar'
import Link from 'next/link'
import Image from 'next/image'
const Home = () => {
  return (
    <div >
      <Navbar></Navbar>
      <div className='flex flex-row justify-center w-full items-center px-20  h-screen' style={{backgroundImage: "url('/bg.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat' }}>
        <div className='border-dashed border-[3px] py-20 px-10 border-black/30 flex flex-row justify-center items-center '>
        <Image  height={380} width={380} src="/ecswarna.png" alt="" />
        <div className='flex flex-col gap-6 w-[800px]'>
          <h1 className='text-kuning font-extrabold text-[40px]' style={{WebkitTextStroke:'1px gray'}}>EMBEDDED & CYBER PHYSICAL SYSTEM LABORATORY</h1>
          <h1 className='font-semibold'>Merupakan laboratorium yang menghubungkan gagasan penelitian terbaru berbasis fisika dengan pengembangan produk atau proses dalam format <span className='font-light'>embedded system </span> dan skema <span className='font-light'>internet-of-things</span>.</h1>
          <div className='flex flex-row gap-4'>
            <Link className='px-6 py-2 rounded-2xl bg-white' href={'/about'} >About</Link>
            <Link className='px-6 py-2  rounded-2xl bg-black/75 text-kuning' href={'/oprec'}>Join Us</Link>
          </div>
        </div>

        </div>
        

      </div>

    </div>
  )
}

export default Home