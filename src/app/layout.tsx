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
        <div className="flex min-h-screen lg:flex-col sm:flex-row">
          <div>
            <Nav />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex-grow mt-2 ml-2">
              {children}
            </div>
            <div className="flex w-full h-28">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
