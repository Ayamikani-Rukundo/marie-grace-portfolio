
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
}

const AnimatedCounter = ({ target, suffix = '', duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = target / (duration * 60) // 60fps
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < target) {
          return Math.min(prevCount + increment, target)
        }
        clearInterval(timer)
        return target
      })
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [target, duration])

  return (
    <motion.div
      className="text-3xl font-bold text-purple-600 dark:text-purple-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {Math.floor(count)}{suffix}
    </motion.div>
  )
}

export default AnimatedCounter
