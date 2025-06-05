
import { useEffect } from 'react'
import { useThemeStore } from '@/lib/store'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDark } = useThemeStore()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-900'
    }`}>
      {children}
    </div>
  )
}
