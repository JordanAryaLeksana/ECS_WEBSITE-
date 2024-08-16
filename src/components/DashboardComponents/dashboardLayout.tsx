import React from 'react';
import Sidebar from './Sidebar/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className='min-h-screen flex flex-row bg-primary-normal-normal'>
      <Sidebar />  
      <main className='flex-1 m-10'>
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
