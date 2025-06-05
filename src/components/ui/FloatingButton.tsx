
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'secondary'
  className?: string
}

const FloatingButton = ({ children, onClick, variant = 'primary', className }: FloatingButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600",
    outline: "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
    secondary: "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600"
  }

  return (
    <motion.button
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  )
}

export default FloatingButton
