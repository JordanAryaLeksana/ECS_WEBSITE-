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
  const handleClick = () => {
    window.location.href = ('https://www.instagram.com/ecs_epits/?igsh=MWRvdm13YWNiNmg3bg%3D%3D')
  }
  return (
    <div className="lg:flex z-[99999] hidden justify-evenly gap-16 items-center px-10 fixed bg-AddsOn-gray h-[68px] top-[50px] right-1/2 translate-x-[48%] rounded-full">
      <ul className="flex items-center gap-10">
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
      <Button variant="default" onClick={handleClick} isHovered>
<<<<<<< HEAD
        Reach Us
=======
        React Us
>>>>>>> 154902097a5b8f4c9014d3326ce053ea169456bc
      </Button>
    </div>
  );
}

export default NavbarItem;