
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'

const AboutSchool = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                School Life
              </h1>
              <p className="text-xl opacity-80">Nyagatare Secondary School Journey</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Nyagatare Secondary School</h2>
              <p className="text-lg leading-relaxed mb-6">
                I'm currently in Senior 5 MPC (Mathematics, Physics, Computer Science) at Nyagatare Secondary School. 
                It's been an incredible journey of learning and growing alongside amazing classmates and teachers.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">My Subjects - MPC</h2>
              <p className="text-lg leading-relaxed mb-6">
                Mathematics, Physics, and Computer Science - these subjects challenge me every day. I'm not the 
                top student, but I work hard and enjoy the logical thinking these subjects require.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">School Activities</h2>
              <p className="text-lg leading-relaxed mb-6">
                Beyond academics, I've gotten involved in various school activities. I help organize events 
                and often find myself advising fellow students when they face challenges.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Academic Approach</h2>
              <p className="text-lg leading-relaxed mb-6">
                I believe in steady progress over perfection. My approach is to understand concepts deeply 
                rather than just memorizing for exams. This has helped me maintain consistent performance.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Future Plans</h2>
              <p className="text-lg leading-relaxed mb-6">
                After completing Senior 6, I plan to pursue higher education that combines my interests in 
                technology and design. I want to develop skills that let me create meaningful digital experiences.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default AboutSchool
