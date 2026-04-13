'use client'

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
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
  const isProposalPage = pathname === '/investors/proposal'

  return (
    <html lang="en" className="scroll-smooth">
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
