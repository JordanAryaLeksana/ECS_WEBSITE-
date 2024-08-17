import { useRouter } from 'next/router';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { HiOutlineBookOpen, HiOutlineClipboard, HiOutlineClipboardCheck, HiOutlineCog, HiOutlineDocumentDownload, HiOutlineLogout } from 'react-icons/hi';

const Menulinks = [
  { href: "/epta/dashboard/modul", label: "Modul", icon: <HiOutlineBookOpen size={30} /> },
  { href: "/epta/dashboard/tugas", label: "Tugas", icon: <HiOutlineClipboard size={30} /> },
  { href: "/epta/dashboard/penilaian", label: "Penilaian", icon: <HiOutlineClipboardCheck size={30} /> },
  { href: "/epta/dashboard/sertifikat", label: "Sertifikat", icon: <HiOutlineDocumentDownload size={30} /> },
];

const Otherlinks = [
  { href: "/epta/dashboard/pengaturan", label: "Pengaturan", icon: <HiOutlineCog size={30} /> },
  { href: "/", label: "Keluar", icon: <HiOutlineLogout size={30} /> },
]

const Sidebar = () => {
  const { pathname } = useRouter(); // Destructure pathname from useRouter

  return (
    <div className='max-w-[250px] w-full bg-primary-normal-normal flex h-full min-h-screen flex-col items-center gap-8 justify-center border-r border-AddsOn-neutral border-solid'>
      <div className='flex flex-col items-center justify-center'>
        <Image src="/EPTA TEXT.svg" alt="logo epta" width={300} height={300} className='' />
      </div>
      <div className='flex flex-col w-full h-full items-center justify-center gap-16'>
        <ul className='flex flex-col items-start space-y-8 text-AddsOn-neutral'>
          {Menulinks.map(({ href, label, icon }) => (
            <li key={`${href} ${label}`} className='mr-10 flex flex-row gap-6 items-center'>
              <span className={pathname === href ? 'text-accent-warning-700' : 'text-secondary-light-light'}>
                {icon}
              </span>
              <Link href={href} className={pathname === href ? 'text-accent-warning-700' : 'text-secondary-light-light'}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <span className='w-full border-t-[1px] border-AddsOn-neutral relative top-5'></span>
        <ul className='flex flex-col items-start ml-24 space-y-8 w-full text-AddsOn-neutral'>
          {Otherlinks.map(({ href, label, icon }) => (
            <li key={`${href} ${label}`} className='flex flex-row gap-6 items-center justify-center'>
              <span className={pathname === href ? 'text-accent-warning-700' : 'text-secondary-light-light'}>
                {icon}
              </span>
              <Link href={href} className={pathname === href ? 'text-accent-warning-700' : 'text-secondary-light-light'}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
