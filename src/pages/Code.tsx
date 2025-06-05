import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useThemeStore } from '@/lib/store'
import { Footer } from '@/components/Footer'

const Code = () => {
  const { isDark } = useThemeStore()

  const programmingLanguages = [
    {
      name: "C++",
      level: "Basic",
      description: "Learning fundamentals through school coursework. Can write simple programs and understand basic syntax.",
      color: "from-blue-500 to-blue-600",
      projects: "3 small projects"
    },
    {
      name: "Java",
      level: "Basic",
      description: "Covered in computer science class. Understand OOP concepts but still learning practical application.",
      color: "from-orange-500 to-red-600",
      projects: "2 console apps"
    },
    {
      name: "Visual Basic",
      level: "Intermediate",
      description: "Most comfortable with VB.NET for Windows forms applications. Created several small desktop apps.",
      color: "from-purple-500 to-purple-600",
      projects: "5+ applications"
    },
    {
      name: "HTML/CSS",
      level: "Intermediate",
      description: "Can create responsive websites and understand modern CSS. This portfolio is proof of progress!",
      color: "from-green-500 to-blue-500",
      projects: "Several websites"
    }
  ]

  const projects = [
    {
      title: "School Calculator App",
      description: "A Visual Basic calculator with advanced functions for math class assignments.",
      tech: "Visual Basic, Windows Forms",
      status: "Completed",
      path: "/code/projects/calculator"
    },
    {
      title: "Student Grade Tracker",
      description: "Simple C++ console application to track and calculate student grades for different subjects.",
      tech: "C++, File I/O",
      status: "Completed",
      path: "/code/projects/grade-tracker"
    },
    {
      title: "Basic Library System",
      description: "Java project for managing book records - add, search, and delete functionality.",
      tech: "Java, OOP Concepts",
      status: "In Progress",
      path: "/code/projects/library-system"
    },
    {
      title: "Personal Portfolio Website",
      description: "This very website! Built with modern web technologies and responsive design.",
      tech: "React, TypeScript, Tailwind CSS",
      status: "Ongoing",
      path: "/code/projects/portfolio"
    }
  ]

  const learningGoals = [
    "Master JavaScript and modern web frameworks",
    "Learn Python for data science applications",
    "Understand database design and SQL",
    "Explore mobile app development",
    "Build more complex, real-world applications"
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-green-600/20 to-purple-600/20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-transparent">
                  Coding
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                My honest journey learning programming languages and building real projects as a student.
              </p>
              <p className="text-lg opacity-80 max-w-4xl mx-auto leading-relaxed">
                I'm not a coding prodigy - just a student learning step by step through school coursework 
                and personal exploration. Every project teaches me something new about problem-solving.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programming Languages */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Languages I'm Learning
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                My honest assessment of where I stand with different programming languages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {programmingLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{lang.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${lang.color}`}>
                          {lang.level}
                        </span>
                      </div>
                      <p className="opacity-80 text-sm mb-4 leading-relaxed">{lang.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-70">{lang.projects}</span>
                        <Button variant="outline" size="sm">
                          <Link to={`/code/languages/${lang.name.toLowerCase().replace(/[^a-z]/g, '')}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                My Projects
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Real projects I've built - nothing fancy, just practical applications that solve problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-500' 
                            : project.status === 'In Progress'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-blue-500/20 text-blue-500'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="opacity-80 text-sm mb-4 leading-relaxed">{project.description}</p>
                      <p className="text-sm mb-4 text-blue-500">{project.tech}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Link to={project.path}>View Project</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Learning Goals */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent">
                Future Learning Goals
              </h2>
              <p className="text-lg opacity-80">
                What I want to achieve in my coding journey after high school.
              </p>
            </div>

            <div className="space-y-4">
              {learningGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm flex items-center space-x-4 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <p className="opacity-90">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
              Explore My Code
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                <Link to="/code/projects">View All Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/code/languages">Language Details</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ThemeProvider>
  )
}

export default Code
