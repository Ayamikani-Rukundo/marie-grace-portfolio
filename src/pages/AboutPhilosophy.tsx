
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'

const AboutPhilosophy = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
                My Philosophy
              </h1>
              <p className="text-xl opacity-80">How I approach life and balance everything</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Balancing All Dimensions</h2>
              <p className="text-lg leading-relaxed mb-6">
                I believe in balancing all dimensions of life. This means giving attention to studies, 
                friendships, personal interests, and growth. No single area should dominate everything else.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Authentic Growth</h2>
              <p className="text-lg leading-relaxed mb-6">
                I don't believe in pretending to be something I'm not. Growth comes from being honest 
                about where you are and working consistently to improve. Small, steady progress beats 
                dramatic claims any day.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Helping Others</h2>
              <p className="text-lg leading-relaxed mb-6">
                One of my core beliefs is that we should help each other succeed. When friends come to 
                me with problems, I try to listen carefully and help them think through solutions. 
                Everyone benefits when we support each other.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Learning Mindset</h2>
              <p className="text-lg leading-relaxed mb-6">
                I approach everything with a learning mindset. Whether it's graphic design, coding, or 
                understanding people better, there's always more to discover and improve.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Future Vision</h2>
              <p className="text-lg leading-relaxed mb-6">
                I want to build skills that let me create meaningful work and help others. My goal is 
                to develop expertise in areas I'm passionate about while staying true to who I am.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default AboutPhilosophy
