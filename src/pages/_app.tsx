import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';

import ComingSoon from './comingsoon';

export default function App({ Component, pageProps }: AppProps) {
  
  // const pathname = usePathname();

  // // Array of paths that should display the Coming Soon page
  // const allowedComingSoon = ['/project'];
  // // Checking if the Coming Soon mode is enabled based on the environment variable
  const comingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON === 'false';

  // // Check if the current path is in the list of allowed paths for Coming Soon
  // const isAllowedComingSoon = allowedComingSoon.includes(pathname);

  // Render the Coming Soon component if the mode is enabled and the path matches
  if (comingSoonMode) {
    return (
<<<<<<< HEAD
      <main>
        <ComingSoon />
=======

      <main >
        <ComingSoon />  
>>>>>>> cc11262d012ea5fb44e07f1c5451e2ac75d4ecc1
      </main>
    );
  }

  // Render the regular component if not in Coming Soon mode or path doesn't match
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
