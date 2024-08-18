import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import Button from '../Buttons';
import { HiOutlineChip, HiOutlineUser } from 'react-icons/hi';

const links = [
  { href: "/", label: "", imageSrc: "/Frame 136.png", imageAlt: "logo-image", imageWidth: 50, imageHeight: 50 },
  { href: "/about", label: "About", icon: <HiOutlineUser size={24} /> },
  { href: "/project", label: "Project", icon: <HiOutlineChip size={24} /> }
];

const NavbarItem = () => {
  const { pathname } = useRouter(); // Dapatkan rute saat ini

  return (
    <div className="flex justify-evenly gap-16 items-center px-10 fixed bg-AddsOn-gray h-[68px] top-[50px] right-1/2 translate-x-[48%] rounded-full">
      <ul className="flex items-center gap-10">
        {links.map(({ href, imageSrc, imageAlt, imageWidth, imageHeight, label, icon }) => (
          <li key={href} className="flex items-center">
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
      <Button variant="default" onClick={() => console.log('belum tau kemana')} isHovered>
        React Us
      </Button>
    </div>
  );
}

export default NavbarItem;
