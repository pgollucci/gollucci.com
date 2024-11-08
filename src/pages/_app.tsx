import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { getMdxComponents } from '../components/util'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const isMDX = pageProps.isMDX || false
  const components = getMdxComponents()

  const content = isMDX
    ? (
        <MDXProvider components={components}>
          <Component className="mdx-article" {...pageProps} />
        </MDXProvider>
      )
    : (
        <Component {...pageProps} />
      )

  return (
    <main className={inter.className}>
      <Nav />
      {content}
      <Footer />
    </main>
  )
}
