
import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { usePathname } from "next/navigation"
import ComingSoon from "./comingsoon"
import NavbarItem from "../components/Navbar/Navbar"



export default function App({ Component, pageProps }: AppProps) {

  const pathname = usePathname()
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
        <NavbarItem />
        <Component {...pageProps} />
      </main>
    )
}

 
// export default function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }