import Link from 'next/link'
import { Mail, Phone, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-binti-storm/20 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-3xl font-bold mb-2">Binti.</div>
            <div className="text-sm text-gray-400 mb-4">Flow. Tech.</div>
            <p className="text-gray-300 text-sm">
              Revolutionising women&apos;s health through intelligent menstrual monitoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-binti-aqua transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-binti-aqua transition-colors">About</Link></li>
              <li><Link href="/app" className="text-gray-300 hover:text-binti-aqua transition-colors">App</Link></li>
              <li><Link href="/investors" className="text-gray-300 hover:text-binti-aqua transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-binti-aqua transition-colors">Contact</Link></li>
              <li>
                <a 
                  href="https://bintiperiod.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-binti-aqua transition-colors"
                >
                  Binti International
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-binti-aqua" />
                info@bintiflowtech.com
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-binti-aqua" />
                +44 7123 456789
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Globe className="w-4 h-4 text-binti-aqua" />
                bintiflowtech.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Binti Flow Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
