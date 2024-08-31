
import type { AppProps } from 'next/app'
import '../styles/globals.css'


import ComingSoon from "./comingsoon"
import Home from "./index"
import Register from "./epta/register"
import Payment from "./epta/payment"
import Confirmation from "./epta/confirmation"



export default function App({ Component, pageProps }: AppProps) {

 
  const comingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON === 'true'
 

  if (comingSoonMode) {
    return (

      <main >
        <Register />  
      </main>

    );
  } else
    return (

      <main >
        <Component {...pageProps} />
      </main>
    )
}

 
