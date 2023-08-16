import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ProviderComponent from '@/redux/ProviderComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FOODIED',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
      <body className={inter.className}>
      
        <ProviderComponent>
          <Navbar />
      
          {children}
          <Footer />
        </ProviderComponent>
       
      </body>
      </html>
   
   
  )
}
