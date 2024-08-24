import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar/sidebar';
import Image from 'next/image';
import { HiOutlineMenu } from 'react-icons/hi';
import SidebarMobile from './Sidebar/sidebarMobile';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isNavbar, setIsNavbarClick] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsNavbarClick(!isNavbar);
  };

  // Handle click outside of sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsNavbarClick(false);
      }
    };

    if (isNavbar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavbar]);

  return (
    <section className='min-h-screen flex flex-col lg:flex-row bg-primary-normal-normal '>
      <div
        className='flex flex-row items-center justify-between p-6 w-screen absolute lg:hidden'
        onClick={handleClick}
      >
        <HiOutlineMenu size={25} color='white' className='ml-3' />
        <Image src="/EPTA TEXT.svg" alt="logo epta" width={125} height={125} className='' />
      </div>
      {/* Sidebar mobile with ref */}
      <div ref={sidebarRef}>
        <SidebarMobile
          className={`transform top-0 h-full transition-transform duration-300 ease-in-out 
          ${isNavbar ? "translate-x-0" : "-translate-x-full"}`}
        />
      </div>
      <Sidebar />
      <main className='flex-1 lg:m-10 my-20 mx-10'>
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
