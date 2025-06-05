
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'

const AdviceThoughts = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
                Life Thoughts
              </h1>
              <p className="text-xl opacity-80">Reflections on life, growth, and finding your path</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Embracing the Learning Process</h2>
              <p className="text-lg leading-relaxed mb-6">
                Life is about continuous learning and growth. Every experience, whether positive or 
                challenging, teaches us something valuable about ourselves and the world around us.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Finding Your Authentic Self</h2>
              <p className="text-lg leading-relaxed mb-6">
                It's easy to get caught up in trying to be what others expect. The real challenge 
                is discovering who you truly are and having the courage to be authentic.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">The Power of Small Steps</h2>
              <p className="text-lg leading-relaxed mb-6">
                Big dreams are achieved through small, consistent actions. Rather than being overwhelmed 
                by the entire journey, focus on taking the next meaningful step forward.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Balancing Dreams and Reality</h2>
              <p className="text-lg leading-relaxed mb-6">
                It's important to dream big while staying grounded in reality. Success comes from 
                combining ambitious vision with practical planning and persistent effort.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default AdviceThoughts
