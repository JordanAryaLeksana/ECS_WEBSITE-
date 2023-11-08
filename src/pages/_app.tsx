import {Poppins} from '@next/font/google'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {ThemeProvider } from "@material-tailwind/react";
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export default function App({ Component, pageProps }: AppProps) {
  return(
  <main className={poppins.className}>
  <ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider>
</main>
 )
}
