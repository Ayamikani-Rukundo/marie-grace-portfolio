import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useThemeStore } from '@/lib/store'
import { Footer } from '@/components/Footer'

const Design = () => {
  const { isDark } = useThemeStore()

  const designCategories = [
    {
      title: "Poster Designs",
      description: "Event posters and promotional materials I've created for school and personal projects",
      path: "/design/portfolio/posters",
      image: "/lovable-uploads/3416da7d-d386-4c00-90fe-0d60e03c7376.png",
      count: "12+ Projects"
    },
    {
      title: "Video Editing",
      description: "Music videos, event highlights, and creative storytelling through video",
      path: "/design/portfolio/videos",
      image: "/lovable-uploads/62f4893e-5b9f-4a3e-b572-38d88c4c5790.png",
      count: "8+ Videos"
    },
    {
      title: "Photo Editing",
      description: "Portrait retouching, event photography editing, and creative photo manipulation",
      path: "/design/portfolio/photos",
      image: "/lovable-uploads/10582e68-548d-4072-9b5c-76e0db2d490a.png",
      count: "25+ Edits"
    }
  ]

  const learningTools = [
    { name: "Adobe Photoshop", skill: "Intermediate", color: "from-blue-500 to-blue-600" },
    { name: "Canva Pro", skill: "Advanced", color: "from-purple-500 to-purple-600" },
    { name: "Adobe Premiere", skill: "Learning", color: "from-green-500 to-green-600" },
    { name: "Figma", skill: "Beginner", color: "from-orange-500 to-orange-600" },
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Graphic Design
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                My journey in visual creativity - from school posters to video editing, 
                constantly learning and improving my design skills.
              </p>
              <p className="text-lg opacity-80 max-w-4xl mx-auto leading-relaxed">
                I started with basic Canva designs and have been expanding my skills with Adobe Creative Suite. 
                Every project teaches me something new about color theory, composition, and visual storytelling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Categories */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                My Design Work
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Explore different categories of my creative work, from digital posters to video projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {designCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {category.count}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                      <p className="opacity-80 text-sm mb-6 leading-relaxed">{category.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={category.path}>View Projects</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tools & Skills */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tools I'm Learning
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                My honest assessment of where I stand with different design tools and software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {learningTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm text-center p-6 hover:shadow-lg transition-all duration-300`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white text-xl font-bold`}>
                      {tool.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold mb-2">{tool.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm bg-gradient-to-r ${tool.color} text-white`}>
                      {tool.skill}
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Learning Journey */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                My Design Journey
              </h2>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm`}
              >
                <h3 className="text-xl font-semibold mb-3">2022 - Starting with Canva</h3>
                <p className="opacity-80 leading-relaxed">
                  My first designs were simple school posters made in Canva. I learned about basic layout, 
                  color combinations, and typography. Nothing fancy, but it sparked my interest in visual design.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm`}
              >
                <h3 className="text-xl font-semibold mb-3">2023 - Exploring Photoshop</h3>
                <p className="opacity-80 leading-relaxed">
                  Started learning Adobe Photoshop through YouTube tutorials. My first attempts at photo editing 
                  were... interesting. But each mistake taught me something new about layers, masks, and adjustments.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm`}
              >
                <h3 className="text-xl font-semibold mb-3">2024 - Video Editing & Beyond</h3>
                <p className="opacity-80 leading-relaxed">
                  Currently learning video editing and planning to expand into motion graphics after high school. 
                  My goal is to turn this passion into a side hustle while pursuing my main studies.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Links */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Explore More
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0">
                <Link to="/design/portfolio">View All Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/design/learning">Learning Process</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/design/tools">Tools & Software</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ThemeProvider>
  )
}

export default Design
