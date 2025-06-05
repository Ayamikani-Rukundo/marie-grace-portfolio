
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useThemeStore()

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'My Life', path: '/about/life' },
        { name: 'School', path: '/about/school' },
        { name: 'Friends', path: '/about/friends' },
        { name: 'Philosophy', path: '/about/philosophy' }
      ]
    },
    { 
      name: 'Design', 
      path: '/design',
      submenu: [
        { name: 'Portfolio', path: '/design/portfolio' },
        { name: 'Learning', path: '/design/learning' },
        { name: 'Tools', path: '/design/tools' }
      ]
    },
    { 
      name: 'Gallery', 
      path: '/gallery',
      submenu: [
        { name: 'Friends', path: '/gallery/friends' },
        { name: 'School', path: '/gallery/school' },
        { name: 'Designs', path: '/gallery/designs' }
      ]
    },
    { 
      name: 'Code', 
      path: '/code',
      submenu: [
        { name: 'Languages', path: '/code/languages' },
        { name: 'Projects', path: '/code/projects' }
      ]
    },
    { 
      name: 'Advice', 
      path: '/advice',
      submenu: [
        { name: 'For Friends', path: '/advice/friends' },
        { name: 'Thoughts', path: '/advice/thoughts' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
      isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
    } border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            <Link to="/">Marie Grace</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
  <div key={item.name} className="relative group">
    <NavLink
      to={item.path}
      className={({ isActive }) => 
        `font-medium transition-colors duration-200 ${
          isActive 
            ? 'text-blue-500' 
            : 'hover:text-blue-500'
        }`
      }
    >
      {item.name}
    </NavLink>
                  {item.submenu && (
                    <div className={`absolute top-full left-0 mt-2 w-48 py-2 ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    } rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border ${
                      isDark ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <NavLink
  to={subItem.path}
  className={({ isActive }) => 
    `block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
      isActive 
        ? 'bg-blue-50 text-blue-600 dark:bg-blue-800/50 dark:text-blue-200' 
        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
    }`
  }
  onClick={() => setIsOpen(false)}
>
  {subItem.name}
</NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                className="mt-4"
              >
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
