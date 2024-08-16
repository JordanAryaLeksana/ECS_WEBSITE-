import { useRouter } from 'next/router';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Menulinks = [
  { href: "/epta/dashboard/modul", label: "Modul", imageSrc: "/Frame 136.svg", imageAlt: "logo-image", imageWidth: 50, imageHeight: 50 },
  { href: "/epta/dashboard/tugas", label: "Tugas", },
  { href: "/epta/dashboard/penilaian", label: "Penilaian", },
  { href: "/project/dashboard/sertifikat", label: "Sertifikat", },
];

const Otherlinks = [
  { href: "/epta/dashboard/pengaturan", label: "Pengaturan", },
  { href: "/", label: "Keluar", },
]
const Sidebar = () => {
  const pathname = useRouter()
  return (
    <div className='max-w-[310px] w-full bg-primary-normal-normal flex h-full min-h-screen flex-col items-center gap-8 justify-center border-r border-AddsOn-neutral border-solid'>
      <div className='flex flex-col items-center justify-center '>

        <Image src="/EPTA TEXT.svg" alt="logo epta" width={300} height={300} className='' />

      </div>
      <div className='flex flex-col w-full h-full items-center justify-center gap-16 '>
        <ul className='flex flex-col items-start space-y-8 text-AddsOn-neutral'>
          {Menulinks.map(({ href, label }) => (

            <li key={`${href} ${label}`} className=''>
              <Link href={href} className=''>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='flex flex-col items-center space-y-8  justify-center  w-full text-AddsOn-neutral'>
          <span className='w-full  border-t-[1px] border-AddsOn-neutral '></span>
          {Otherlinks.map(({ href, label }) => (
            <li key={`${`href`} ${label}`} className='w-fit items-start'>
              <Link href={href} className=''>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
