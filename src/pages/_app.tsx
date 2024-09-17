
import type { AppProps } from 'next/app'
import '../styles/globals.css'


import ComingSoon from "./comingsoon"
import DashboardProvider from '@/components/Provider/authProvider';




export default function App({ Component, pageProps }: AppProps) {

 
  const comingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON === 'false'
 

  if (comingSoonMode) {
    return (

      <main >
        <ComingSoon />  
      </main>

    );
  } else
    return (

      <main >
      <DashboardProvider>
      <Component {...pageProps} />
      </DashboardProvider>
        
      </main>
    )
}

 
