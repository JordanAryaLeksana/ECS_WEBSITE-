
import Link from 'next/link'
import Button from '@/components/Buttons'
import Typography from '@/components/Typography/Typography'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-AddsOn-gray'>
      <Image src={`/background-3.png`} alt='bakcground' objectFit='cover' fill />
      <div className='flex items-center justify-center w-[521px] h-[440px] bg-AddsOn-gray bg-opacity-5 border border-AddsOn-white border-opacity-55  rounded-3xl  '>
        <div className=' flex flex-col justify-center items-center gap-10'>
          <Image className='' src={`/4 _ 4.svg`} alt='logo404' width={300} height={300} />
          <div className='flex flex-col gap-4 items-center'>
            <Typography variant='Header' size='3xl' className='font-extrabold text-AddsOn-neutral'>Oops!</Typography>
            <Typography variant='Paragraph' size='sm' className='font-regular text-AddsOn-neutral'>Sorry, We’re not able to find what you were looking for.</Typography>
          </div>
          <Link href={`/`} >
            <Button variant="default" className='cursor-pointer' isHovered>
              <Typography variant="Paragraph" size="base">Home</Typography>
              <Image src={`/logout.svg`} alt='logout' width={30} height={30} className='text-AddsOn-gray' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}