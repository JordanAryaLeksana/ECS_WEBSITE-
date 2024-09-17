import { useRouter } from 'next/router';
import React from 'react'
import Link from 'next/link';
import { HiOutlineBookOpen, HiOutlineClipboard, HiOutlineClipboardCheck, HiOutlineCog, HiOutlineDocumentDownload, HiOutlineLogout, HiOutlineMenu } from 'react-icons/hi';
import Cookies from "js-cookie"
interface NavbarProps {
  className: string
}

const Menulinks = [
  { href: "/epta/dashboard/modul", label: "Modul", icon: <HiOutlineBookOpen size={30} /> },
  { href: "/epta/dashboard/tugas", label: "Tugas", icon: <HiOutlineClipboard size={30} /> },
  { href: "/epta/dashboard/penilaian", label: "Penilaian", icon: <HiOutlineClipboardCheck size={30} /> },
  { href: "/epta/dashboard/sertifikat", label: "Sertifikat", icon: <HiOutlineDocumentDownload size={30} /> },
];

const Otherlinks = [
  { href: "/epta/dashboard/pengaturan", label: "Pengaturan", icon: <HiOutlineCog size={30} /> },
  // { href: "/", label: "Keluar", icon: <HiOutlineLogout size={30} /> },
]

const SidebarMobile = ({ className }: NavbarProps) => {
  const { pathname } = useRouter();
  const router = useRouter()

  function handleLogout() {

    Cookies.remove('data')
    router.push('/epta/login')

  }
  return (
    <div className={`flex flex-col w-full max-w-[310px] transition-all duration-600 h-full items-center bg-primary-normal-normal border-r border-AddsOn-neutral border-solid justify-center gap-16 absolute lg:hidden z-[1111111]  ${className}`}>
      <ul className='flex flex-col items-start space-y-16 text-AddsOn-neutral'>
        {Menulinks.map(({ href, label, icon }) => (
          <li key={`${href} ${label}`} className='mr-20 flex flex-row gap-6 '>
            <span className={pathname === href ? 'text-accent-warning-700' : 'text-secondary-light-light'}>
              {icon}
            </span>
            <Link href={href} className={pathname === href ? 'text-accent-warning-700 text-2xl' : 'text-secondary-light-light text-2xl'}>
              {label}
            </Link>

          </li>
        ))}
      </ul>
      <span className='w-full border-t-[1px] border-AddsOn-neutral relative top-5'></span>
      <ul className='flex flex-col items-start ml-20 space-y-14 w-full text-AddsOn-neutral'>
        {Otherlinks.map(({ href, label, icon }) => (
          <li key={`${href} ${label}`} className='flex flex-row gap-6 items-center justify-center'>
            <span className={pathname === href ? 'text-accent-warning-700' : 'text-secondary-light-light'}>
              {icon}
            </span>
            <Link href={href} className={pathname === href ? 'text-accent-warning-700 text-2xl' : 'text-secondary-light-light text-2xl'}>
              {label}
            </Link>


          </li>
        ))}
        <button onClick={handleLogout} className='flex flex-row gap-6'><span className={'text-secondary-light-light'}>
          {<HiOutlineLogout size={30} />}
        </span><h1 className='text-secondary-light-light text-2xl'>Keluar</h1></button>
      </ul>
    </div>
  )
}

export default SidebarMobile