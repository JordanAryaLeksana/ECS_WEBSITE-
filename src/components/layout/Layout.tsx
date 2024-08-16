

import * as React from 'react';
import NavbarItem from './Navbar';

type LayoutPros = {
  children: React.ReactNode;
  withFooter?: boolean;
  withNavbar?: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function Layout({
  children,
  withFooter = true,
  withNavbar = true,
}: LayoutPros) {
  

  return (
    <div className='overflow-x-hidden'>
      {withNavbar && <NavbarItem />}
      {children}

    </div>
  );
}
