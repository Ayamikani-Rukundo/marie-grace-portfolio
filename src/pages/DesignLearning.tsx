
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'

const DesignLearning = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Learning Design
              </h1>
              <p className="text-xl opacity-80">My journey into graphic design and visual creativity</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">How I Started Learning Design</h2>
              <p className="text-lg leading-relaxed mb-6">
                My design journey began with simple curiosity about how beautiful posters and graphics are made. 
                I started with basic tools and gradually worked my way up to more professional software.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Learning Resources</h2>
              <p className="text-lg leading-relaxed mb-6">
                YouTube tutorials have been my primary learning resource. I follow design channels that teach 
                fundamentals like color theory, typography, and composition. Each tutorial teaches me something new.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Practice Projects</h2>
              <p className="text-lg leading-relaxed mb-6">
                I practice by creating designs for school events, helping friends with their projects, and 
                challenging myself with new styles. Each project is a learning opportunity.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Future Learning Goals</h2>
              <p className="text-lg leading-relaxed mb-6">
                I want to master motion graphics and learn more about user interface design. My goal is to 
                create designs that are not just beautiful but also functional and user-friendly.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default DesignLearning
