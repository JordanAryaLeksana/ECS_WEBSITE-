import { useRouter } from 'next/router';
import React from 'react'
import { HiOutlineChat, HiOutlineChip, HiOutlineUser } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
const links = [
  { href: "/", label: "", imageSrc: "/Frame 136.png", imageAlt: "logo-image", imageWidth: 50, imageHeight: 50 },
  { href: "/about", label: "About", icon: <HiOutlineUser size={24} /> },
  { href: "/project", label: "Project", icon: <HiOutlineChip size={24} /> },
  { href: "/", label: "", icon: <HiOutlineChat size={24} /> }
];

const NavbarMobile = () => {
  const { pathname } = useRouter()
  return (
    <div className='fixed bottom-0 w-screen z-[999999] flex h-[56px] bg-AddsOn-gray justify-center lg:hidden '>
      <ul className='flex flex-row justify-center items-center gap-10 w-full sm:justify-evenly '>
        {links.map(({ href, imageSrc, imageAlt, imageWidth, imageHeight, label, icon }, index) => (
          <li key={index} className="flex items-center">
            <Link href={href} className="flex items-center ">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  height={imageHeight}
                  width={imageWidth}
                />
              )}
              <span className={pathname === href ? 'text-AddsOn-neutral' : 'text-secondary-normal-normal'}>
                {icon}
              </span>
              {pathname === href && (
                <span className="font-inter text-base text-AddsOn-neutral ml-1">{label}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarMobile