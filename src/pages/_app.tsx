import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';

<<<<<<< HEAD
import type { AppProps } from 'next/app'
import '../styles/globals.css'


import ComingSoon from "./comingsoon"
import DashboardProvider from '@/components/Provider/authProvider';



=======
import ComingSoon from './comingsoon';
>>>>>>> 154902097a5b8f4c9014d3326ce053ea169456bc

export default function App({ Component, pageProps }: AppProps) {

 
  const comingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON === 'false'
 
  if (comingSoonMode) {
    return (
      <main>

        <ComingSoon />
      </main>
    );
  }

<<<<<<< HEAD
      <main >
      <DashboardProvider>
      <Component {...pageProps} />
      </DashboardProvider>
        
      </main>
    )
=======
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
>>>>>>> 154902097a5b8f4c9014d3326ce053ea169456bc
}
