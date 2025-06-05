
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { Lightbox } from '@/components/Lightbox'
import GradientMesh from '@/components/animations/GradientMesh'
import FloatingButton from '@/components/ui/FloatingButton'
import AnimatedCounter from '@/components/animations/AnimatedCounter'
import { useThemeStore } from '@/lib/store'

const Index = () => {
  const navigate = useNavigate()
  const { isDark } = useThemeStore()

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Lightbox />
        
        <div className="relative min-h-screen">
          <GradientMesh />
          
          {/* Main Hero Section */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white"> 
                  <motion.img 
                    src="/lovable-uploads/d9c78086-37dd-4dd9-a318-874d8b4a42d9.png" 
                    alt="Mukeshimana Marie Grace"
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="space-y-3 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-green-500 bg-clip-text text-transparent">
                  Mukeshimana Marie Grace
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Senior 5 MPC | Graphic Design Enthusiast | Problem Solver
                </p>
                <p className="text-base opacity-70">
                  Nyagatare Secondary School
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <AnimatedCounter target={5} suffix="+" />
                  <p className="text-sm opacity-70 mt-1">Design Projects</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter target={3} suffix="+" />
                  <p className="text-sm opacity-70 mt-1">Programming Languages</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter target={10} suffix="+" />
                  <p className="text-sm opacity-70 mt-1">Friends Helped</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <FloatingButton onClick={() => navigate('/about')}>
                  Explore My Journey
                </FloatingButton>
                <FloatingButton 
                  onClick={() => navigate('/gallery')}
                  variant="outline"
                  className="bg-white/20 backdrop-blur-md border-2 border-purple-300"
                >
                  View My Work
                </FloatingButton>
                <FloatingButton 
                  onClick={() => navigate('/contact')}
                  variant="secondary"
                >
                  Get In Touch
                </FloatingButton>
              </motion.div>
            </div>
          </div>

          {/* Extended About Section */}
  .
          <div className={`relative z-10 py-16 px-4 ${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md`}>
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  My High School Journey
                </h2>
                <p className="text-base opacity-80 max-w-3xl mx-auto">
                  Currently in my final year at Nyagatare Secondary School, I'm passionate about mathematics, 
                  physics, chemistry, graphic design, and helping my fellow students achieve their dreams.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { title: "Academic Excellence", desc: "Strong performance in MPC subjects with dedication to learning", color: "from-purple-500 to-purple-600" },
                  { title: "Creative Design", desc: "Developing skills in graphic design and visual creativity", color: "from-pink-500 to-pink-600" },
                  { title: "Problem Solving", desc: "Helping friends with challenges and thinking analytically", color: "from-blue-500 to-blue-600" },
                  { title: "Programming Skills", desc: "Learning multiple languages and building real projects", color: "from-green-500 to-green-600" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Current Focus Areas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold">Current Academic Focus</h3>
                  <div className="space-y-4">
                    {[
                      { subject: "Mathematics", desc: "Advanced algebra, calculus foundations, and problem-solving" },
                      { subject: "Physics", desc: "Mechanics, electricity, and scientific thinking" },
                      { subject: "Chemistry", desc: "Organic chemistry, lab techniques, and analytical thinking" }
                    ].map((item, index) => (
                      <div key={item.subject} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold">{item.subject}</h4>
                          <p className="text-sm opacity-80">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold">Creative & Technical Skills</h3>
                  <div className="space-y-4">
                    {[
                      { skill: "Graphic Design", desc: "Learning visual design principles and creative software" },
                      { skill: "Programming", desc: "Building skills in C++, Java, Visual Basic, and HTML" },
                      { skill: "Problem Solving", desc: "Helping friends with challenges and analytical thinking" }
                    ].map((item, index) => (
                      <div key={item.skill} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold">{item.skill}</h4>
                          <p className="text-sm opacity-80">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Goals Section */}
              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-green-500 rounded-2xl p-8 text-white mb-16"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-center">My Senior Year Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Academic Excellence</h4>
                    <p className="text-sm opacity-90">Excel in national exams and maintain strong performance</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Skill Development</h4>
                    <p className="text-sm opacity-90">Advance my design and programming abilities</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Future Preparation</h4>
                    <p className="text-sm opacity-90">Prepare for higher education and career goals</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quote Section */}
          <motion.div 
            className="relative z-10 py-12 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl font-medium italic">
                "Every challenge is an opportunity to grow. In Senior 5, I'm not just studying subjects - 
                I'm discovering my potential and learning to help others discover theirs."
              </blockquote>
              <p className="text-base opacity-70 mt-4">- Marie Grace's Philosophy</p>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Index
