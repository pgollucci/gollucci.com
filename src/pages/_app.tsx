import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
