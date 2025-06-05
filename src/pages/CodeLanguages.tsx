
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'

const CodeLanguages = () => {
  const languages = [
    {
      name: "C++",
      description: "Object-oriented programming fundamentals",
      level: "Basic",
      experience: "6 months",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Java",
      description: "Cross-platform application development",
      level: "Basic",
      experience: "4 months",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Visual Basic",
      description: "Windows desktop applications",
      level: "Intermediate",
      experience: "8 months",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "HTML/CSS",
      description: "Web development and styling",
      level: "Intermediate",
      experience: "10 months",
      color: "from-green-500 to-blue-500"
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
                Programming Languages
              </h1>
              <p className="text-xl opacity-80">My coding skills and experience</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{lang.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${lang.color}`}>
                          {lang.level}
                        </span>
                      </div>
                      <p className="opacity-80 text-sm mb-4">{lang.description}</p>
                      <p className="text-sm opacity-70">Experience: {lang.experience}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default CodeLanguages
