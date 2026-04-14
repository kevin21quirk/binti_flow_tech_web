import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
