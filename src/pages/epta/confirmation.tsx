import Typography from '@/components/Typography/Typography'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/Buttons'
import Link from 'next/link'
import { useData } from '@/components/Provider/authProvider'
import { useRouter } from 'next/router'

const Confirmation = () => {
  const {userData} = useData()
  const router = useRouter()
  const status = userData?.payment_status
  useEffect(() => {
    status && router.push('/epta/dashboard/modul')
  },[userData])
  return (
    <div className='min-h-screen flex items-center justify-center bg-primary-normal-normal overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <Image src={`/bg kotak kuning.svg`} alt='bg-2' layout='fill' objectFit='cover' className='w-full h-full hidden sm:block' />
      </div>
      
      {/* Black Box Container */}
      <div className='relative flex flex-col items-center justify-center max-w-[1030px] w-full sm:h-[536px] rounded-[22px] gap-[10px] p-10 sm:p-[102px_80px] border-b border-[#1E1E1E] bg-[#1E1E1E]'>
        <Image src='/check-circle.svg' alt='check' height={60} width={60} className='mb-4'/>
        <Typography variant='Header' size='4xl' className='text-AddsOn-neutral font-bold text-center mb-4'>
          Mohon Menunggu Konfirmasi!
        </Typography>
        <Typography variant='Paragraph' size='base' className='text-secondary-light-active text-center leading-[24px]'>
          Terima Kasih sudah mendaftarkan diri anda untuk mengikuti{" "}
          <span className='font-bold'>EPTA 2024</span>
          <br />
          Selanjutnya mohon untuk{" "}
          <span className='font-bold'>menunggu konfirmasi</span> pembayaran anda dari Admin.
          <br />
          Setelah terkonfirmasi, anda dapat login untuk masuk ke{" "}
          <span className='font-bold'>halaman menu EPTA 2024</span>
        </Typography>
        <Link href={`/epta/payment`} className='mt-6'>
          <Button size='medium' variant="default" className='flex items-center justify-center h-[42px] w-[268px] p-[9px]'>
            <Typography variant="Paragraph" size="base" className='text-center text-nowrap'>Kembali ke menu pembayaran</Typography>
            <Image src={`/logout.svg`} alt='logout' width={24} height={24} className='ml-2'/>
          </Button>
        </Link>
        <div className='text-AddsOn-neutral mt-5'>
        <h1 className='font-bold'>Further Question? Contact Us:</h1>
        <h1>Willy <span className='text-accent-warning-700'><Link href="https://wa.me/6287761837996">6287761837996</Link></span>
</h1>
<h1>Jordan <span className='text-accent-warning-700'><Link href="https://wa.me/628111865557">628111865557</Link></span></h1></div>
      </div>
    </div>
  )
}

export default Confirmation
