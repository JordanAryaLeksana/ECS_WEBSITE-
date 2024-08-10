
import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { usePathname } from "next/navigation"
import ComingSoon from "./components/comingSoon/comingsoon"
import NavbarItem from "./components/Navbar"



export default function App({ Component, pageProps }: AppProps) {

  const pathname = usePathname()
  const comingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON === 'true'
 
  

  if (comingSoonMode) {
    return (

      <main >
        <ComingSoon />
      </main>

    );
  } else
    return (

      <main >
        <NavbarItem />
        <Component {...pageProps} />
      </main>

    )
}
