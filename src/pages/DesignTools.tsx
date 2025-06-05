
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'

const DesignTools = () => {
  const tools = [
    {
      name: "Adobe Photoshop",
      description: "Photo editing and digital art creation",
      level: "Intermediate",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Canva Pro",
      description: "Quick designs and social media graphics",
      level: "Advanced",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Adobe Illustrator",
      description: "Vector graphics and logo design",
      level: "Learning",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Figma",
      description: "UI/UX design and prototyping",
      level: "Beginner",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Design Tools
              </h1>
              <p className="text-xl opacity-80">Software and tools I use for design work</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-xl font-bold`}>
                        {tool.name.charAt(0)}
                      </div>
                      <h3 className="font-semibold mb-2">{tool.name}</h3>
                      <p className="text-sm opacity-80 mb-3">{tool.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm bg-gradient-to-r ${tool.color} text-white`}>
                        {tool.level}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">My Tool Selection Process</h2>
              <p className="text-lg leading-relaxed mb-6">
                I choose tools based on what I need to accomplish and what I can access as a student. 
                Free alternatives and student discounts help me learn professional software without breaking the bank.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Learning Curve</h2>
              <p className="text-lg leading-relaxed mb-6">
                Each tool has its own learning curve. I start with basic features and gradually explore 
                advanced capabilities as my projects become more complex.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default DesignTools
