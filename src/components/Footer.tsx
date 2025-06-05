
import { Link } from 'react-router-dom'
import { useThemeStore } from '@/lib/store'

export function Footer() {
  const { isDark } = useThemeStore()

  const socialLinks = [
    { name: 'Email', href: 'mailto:gracemukeshimana@gmail.com', icon: '📧' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'LinkedIn', href: '#', icon: '💼' }
  ]

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Design', href: '/design' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Code', href: '/code' },
    { name: 'Advice', href: '/advice' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className={`py-12 mt-20 border-t ${
      isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-50/50 border-gray-200'
    } backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Marie Grace
            </h3>
            <p className="opacity-80 text-sm leading-relaxed">
              Senior 5 MPC student passionate about graphic design, coding, and helping friends. 
              This is my authentic digital space.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200 flex items-center gap-2"
                >
                  <span>{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-sm opacity-60">
            © 2024 Mukeshimana Marie Grace. Made by Ayamikani Rukundo Emmanuel❤️.
          </p>
        </div>
      </div>
    </footer>
  )
}
