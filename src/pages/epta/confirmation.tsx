import Typography from '@/components/Typography/Typography'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Buttons'
import Link from 'next/link'
const Confirmation = () => {
  return (
    <div className='min-h-screen min-w-screen bg-primary-normal-normal relative flex items-center justify-center overflow-hidden'>
      <Image src={`/bg kotak kuning.svg`} alt='bg-2' layout='fill' objectFit='cover' className='hidden sm:block'/>
        <div className='absolute max-w-[1030px] w-full h-auto sm:h-[536px] rounded-[22px] gap-[10px] p-[102px_80px] border-b border-[#1E1E1E] bg-[#1E1E1E] z-10 flex flex-col items-center'>
            <Image src='/check-circle.svg' alt='check' height={60} width={60} className='mx-auto mb-4'/>                    
            <Typography variant='Header' size='4xl' className='text-AddsOn-neutral font-bold text-center mb-4'>
              Mohon Menunggu Konfirmasi!
            </Typography>
            <Typography variant='Paragraph' size='base' className='text-secondary-light-active text-center leading-[24px]'>
              Terima Kasih sudah mendaftarkan diri anda untuk mengikuti{" "} <span className='font-bold'>EPTA 2024</span>
              <br />
              Selanjutnya mohon untuk{" "} <span className='font-bold'>menunggu konfirmasi </span> pembayaran anda dari Admin.
              <br />
              Setelah terkonfirmasi, anda dapat login untuk masuk ke{" "} <span className='font-bold'>halaman menu EPTA 2024</span>
            </Typography>
            <Link href={`/`} >
              <Button size='medium' variant="default" className='cursor-pointer h-[42px] w-[268px] p-[9px] mt-6 mx-auto flex items-center justify-center'>
                <Typography variant="Paragraph" size="base" className='text-center text-nowrap'>Kembali ke halaman ECS</Typography>
                <Image src={`/logout.svg`} alt='logout' width={24} height={24} className='ml-2'/>
              </Button>
            </Link>
        </div>
    </div>
  )
}

export default Confirmation