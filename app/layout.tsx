import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import LayoutShell from '@/components/LayoutShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Binti Flow Tech - Revolutionising Women\'s Health',
  description: 'Smart menstrual health monitoring with AI-powered diagnostics and biomarker detection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <LayoutShell>{children}</LayoutShell>
        </AuthProvider>
      </body>
    </html>
  )
}
