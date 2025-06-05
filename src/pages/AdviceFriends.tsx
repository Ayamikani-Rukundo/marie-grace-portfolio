
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'

const AdviceFriends = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                Advice for Friends
              </h1>
              <p className="text-xl opacity-80">Thoughts on friendship and helping each other grow</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Being There for Each Other</h2>
              <p className="text-lg leading-relaxed mb-6">
                True friendship means being present when someone needs you. It's not about having all 
                the answers, but about listening carefully and helping friends think through their challenges.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">The Art of Listening</h2>
              <p className="text-lg leading-relaxed mb-6">
                Sometimes friends don't need advice - they just need someone to hear them out. 
                I've learned that asking the right questions is often more helpful than giving quick solutions.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Supporting Without Judging</h2>
              <p className="text-lg leading-relaxed mb-6">
                Everyone makes mistakes and faces difficult situations. The best thing we can do as 
                friends is create a safe space where people feel comfortable sharing their struggles.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Growing Together</h2>
              <p className="text-lg leading-relaxed mb-6">
                The best friendships involve mutual growth. We challenge each other to be better while 
                accepting each other as we are. It's a balance that takes time to develop.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default AdviceFriends
