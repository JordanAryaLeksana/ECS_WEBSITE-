import React from 'react';
import Sidebar from './Sidebar/sidebar';
import Image from 'next/image'
import { HiOutlineMenu } from 'react-icons/hi';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className='min-h-screen flex flex-col bg-primary-normal-normal '>
      <div className='flex flex-row items-center justify-between p-5 w-screen absolute'>
        <HiOutlineMenu size={25} color='white'/>
        <Image src="/EPTA TEXT.svg" alt="logo epta" width={125} height={125} className=' ' />
      </div>
      <Sidebar  />  
      <main className='flex-1 m-10  '>
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
