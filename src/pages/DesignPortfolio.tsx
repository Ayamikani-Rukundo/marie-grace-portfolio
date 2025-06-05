
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'

const DesignPortfolio = () => {
  const projects = [
    {
      title: "School Event Posters",
      category: "Poster Design",
      description: "Designed promotional materials for school events and activities.",
      image: "/lovable-uploads/3416da7d-d386-4c00-90fe-0d60e03c7376.png"
    },
    {
      title: "Friend Portrait Edits",
      category: "Photo Editing",
      description: "Enhanced photos for friends and classmates.",
      image: "/lovable-uploads/62f4893e-5b9f-4a3e-b572-38d88c4c5790.png"
    },
    {
      title: "Digital Graphics",
      category: "Digital Art",
      description: "Created various digital graphics and illustrations.",
      image: "/lovable-uploads/61d1d45d-256d-4f76-8594-f9e75afd065a.png"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
                Design Portfolio
              </h1>
              <p className="text-xl opacity-80">My creative projects and learning journey</p>
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
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-blue-500 font-medium mb-2">{project.category}</p>
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-sm opacity-80 leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">My Design Approach</h2>
              <p className="text-lg leading-relaxed mb-6">
                I focus on creating designs that serve a purpose and look good. My work often involves 
                helping friends and school events with visual materials. I'm still learning, but I 
                enjoy the process of bringing ideas to life visually.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Current Focus Areas</h2>
              <p className="text-lg leading-relaxed mb-6">
                Right now, I'm working on improving my poster design skills and learning more about 
                photo editing. Each project teaches me something new about color, composition, and 
                visual communication.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default DesignPortfolio
