'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const FULLSCREEN_ROUTES = ['/investors/proposal']

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isFullscreen = FULLSCREEN_ROUTES.includes(pathname)

  if (isFullscreen) {
    return <>{children}</>
  }

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
