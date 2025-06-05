
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'

const AboutLife = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                My Life Story
              </h1>
              <p className="text-xl opacity-80">Born in 2008, growing up in Rwanda</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Early Years</h2>
              <p className="text-lg leading-relaxed mb-6">
                I was born in 2008 in Rwanda, growing up in a family that values education and hard work. 
                From a young age, I've been curious about how things work and always enjoyed solving problems.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Sports and Activities</h2>
              <p className="text-lg leading-relaxed mb-6">
                As a kid, I played football and really enjoyed it. Sports taught me teamwork and perseverance, 
                values that I carry with me in everything I do today.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Finding My Passions</h2>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, I discovered my love for graphic design and helping others. I'm not a genius 
                or anything special - just someone who works hard and cares about doing good work.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Family</h2>
              <p className="text-lg leading-relaxed mb-6">
                My brother Nizeyimana Thierry is in Senior 6 MPC at the same school. We support each other 
                in our studies and share similar interests in math and science.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default AboutLife
