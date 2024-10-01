import React, { useState, useRef, useEffect, createContext } from 'react';
import Sidebar from './Sidebar/sidebar';
import Image from 'next/image';
import { HiOutlineMenu } from 'react-icons/hi';
import SidebarMobile from './Sidebar/sidebarMobile';
import DashboardProvider, { useData } from '@/components/Provider/authProvider';
import { useRouter } from 'next/router';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isNavbar, setIsNavbarClick] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
 const router =useRouter()
 const { userData } = useData();

if(userData?.payment_status === false){
  router.push('/epta/confirmation')
}
if(userData == null){
  router.push('/epta/login')
}



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
        className='flex flex-row items-center justify-between p-6 w-screen absolute lg:hidden bg-AddsOn-gray'
        onClick={handleClick}
      >
        <HiOutlineMenu size={25}  className='ml-3 text-secondary-normal-normal' />
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
      <main className='flex-1 lg:m-10 my-28 mx-10'>
        {children}
      </main>
    </section>
     
    
  
  );
};

export default DashboardLayout;



