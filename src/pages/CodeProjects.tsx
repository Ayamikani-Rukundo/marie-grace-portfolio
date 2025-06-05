
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'

const CodeProjects = () => {
  const projects = [
    {
      title: "Calculator Application",
      description: "A Windows Forms calculator with basic and scientific functions",
      tech: "Visual Basic",
      status: "Completed",
      features: ["Basic arithmetic", "Scientific functions", "Memory operations"]
    },
    {
      title: "Student Management System",
      description: "A simple system to manage student records and grades",
      tech: "C++",
      status: "Completed",
      features: ["Add students", "Calculate grades", "Generate reports"]
    },
    {
      title: "Personal Website",
      description: "This portfolio website showcasing my work and experiences",
      tech: "React, TypeScript",
      status: "Ongoing",
      features: ["Responsive design", "Interactive gallery", "Theme switching"]
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                Code Projects
              </h1>
              <p className="text-xl opacity-80">Applications and systems I've built</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-500' 
                            : 'bg-blue-500/20 text-blue-500'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="opacity-80 text-sm mb-4">{project.description}</p>
                      <p className="text-sm mb-4 text-blue-500">{project.tech}</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Features:</p>
                        {project.features.map((feature, idx) => (
                          <p key={idx} className="text-xs opacity-70">• {feature}</p>
                        ))}
                      </div>
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

export default CodeProjects
