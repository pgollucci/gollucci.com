import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gollucci.com',
  description: 'CV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
