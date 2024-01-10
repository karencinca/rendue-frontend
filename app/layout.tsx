import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Menu from '@/components/menu'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rentdule',
  description: 'Your app to organize your properties and bookings.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Menu />
        {children}
      </body>
    </html>
  )
}
