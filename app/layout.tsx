'use client'

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isProposalPage, setIsProposalPage] = useState(false)

  useEffect(() => {
    setIsProposalPage(pathname === '/investors/proposal')
  }, [pathname])

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          {!isProposalPage && <Navigation />}
          {children}
          {!isProposalPage && <Footer />}
        </AuthProvider>
      </body>
    </html>
  )
}
