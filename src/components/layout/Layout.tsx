import * as React from 'react';
import NavbarItem from './Navbar';
import { usePathname } from 'next/navigation';
import Splash from '@/pages/splash';

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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loading, setLoading] = React.useState(isHome);

  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 3000); // Splash screen tampil selama 3 detik
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className='overflow-x-hidden'>
      {
        loading && isHome ?
          <Splash />
          :
          <>
            {withNavbar && <NavbarItem />}
            {children}
          </>
      }
    </div>
  );
}