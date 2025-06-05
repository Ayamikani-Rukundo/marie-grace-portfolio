import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/lib/store'
import { Footer } from '@/components/Footer'

const About = () => {
  const { isDark } = useThemeStore()

  const lifeAspects = [
    {
      title: "Early Years & Sports",
      content: "I was born in 2008 and spent my early childhood enjoying various activities. As a kid, I loved playing football with friends in the neighborhood. Those days taught me teamwork and the joy of physical activity, though I'm more focused on academics and creative pursuits now.",
      icon: "⚽"
    },
    {
      title: "Academic Journey", 
      content: "Currently in Senior 5 MPC (Mathematics, Physics, Computer Science) at Nyagatare Secondary School. I'm not the smartest student in class, but I work consistently hard. My favorite subjects are computer science and mathematics, where I can apply logical thinking.",
      icon: "📚"
    },
    {
      title: "Family Bond",
      content: "My brother Nizeyimana Thierry is in Senior 6 MPC at the same school. We share study sessions, discuss our future plans, and support each other through challenging times. Having him nearby makes the school experience even more meaningful.",
      icon: "👨‍👦"
    },
    {
      title: "Personality Traits",
      content: "Friends describe me as thoughtful and reliable. I enjoy listening to people's problems and helping them find solutions. I'm not the loudest person in the room, but I observe carefully and think deeply about situations before offering advice.",
      icon: "🤔"
    }
  ]

  const subPages = [
    {
      title: "My Life Story",
      description: "Born in 2008, childhood memories, sports, and growing up experiences that shaped who I am today.",
      path: "/about/life",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "School Experience", 
      description: "Nyagatare Secondary School, Senior 5 MPC studies, my brother Thierry, and academic journey.",
      path: "/about/school",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "My Amazing Friends",
      description: "Niyingenera Eritah, Ayamikani Rukundo, Keza Denyse, Ngenzi Brave, and the wonderful people in my life.",
      path: "/about/friends", 
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Life Philosophy",
      description: "How I balance all dimensions of life and my approach to personal growth and relationships.",
      path: "/about/philosophy",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto">
                The authentic story of Mukeshimana Marie Grace - no exaggerations, no lies, 
                just the real journey of a 16-year-old student passionate about life, learning, and friendships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Story Section */}
        <AnimatedSection className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                  Who I Really Am
                </h2>
                <div className="space-y-6 text-lg leading-relaxed opacity-90">
                  <p>
                    My name is Mukeshimana Marie Grace, and I was born in 2008. I'm currently a Senior 5 student 
                    studying MPC (Mathematics, Physics, Computer Science) at Nyagatare Secondary School. 
                    I want to be completely honest from the start - I'm not a genius or a prodigy. 
                    I'm just a regular student who works hard and tries to make the most of every opportunity.
                  </p>
                  <p>
                    What makes me unique isn't exceptional intelligence, but rather my genuine care for the people 
                    around me and my passion for creative pursuits like graphic design. I love learning new things, 
                    whether it's a programming language, design technique, or simply understanding how to help 
                    a friend through a difficult situation.
                  </p>
                  <p>
                    My brother Nizeyimana Thierry is in Senior 6 MPC at the same school, and having him there 
                    makes my school experience even more special. We study together, share ideas, and support 
                    each other through the challenges of secondary school life.
                  </p>
                  <p>
                    I believe in balancing all dimensions of life - academics, friendships, creative pursuits, 
                    and personal growth. This philosophy guides how I approach every day and every challenge I face.
                  </p>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/lovable-uploads/3416da7d-d386-4c00-90fe-0d60e03c7376.png"
                  alt="Marie Grace in formal attire"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Life Aspects Grid */}
        <AnimatedSection className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent">
              Different Aspects of My Life
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lifeAspects.map((aspect, index) => (
                <motion.div
                  key={aspect.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 h-full`}>
                    <CardContent className="p-8">
                      <div className="text-4xl mb-4">{aspect.icon}</div>
                      <h3 className="text-xl font-semibold mb-4">{aspect.title}</h3>
                      <p className="opacity-80 leading-relaxed">{aspect.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed Sections Navigation */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Explore My Story in Detail
              </h2>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">
                Each section below contains in-depth stories, experiences, and authentic details about different aspects of my life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 h-full group`}>
                    <CardContent className="p-8">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${page.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-6 h-6 bg-white rounded-sm"></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{page.title}</h3>
                      <p className="opacity-80 leading-relaxed mb-6">{page.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={page.path}>Read Full Story</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Stats Section */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Quick Facts About Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">2008</div>
                <p className="text-lg font-medium mb-2">Year Born</p>
                <p className="opacity-70">16 years old</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent mb-2">5</div>
                <p className="text-lg font-medium mb-2">Senior Year</p>
                <p className="opacity-70">MPC Stream</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent mb-2">∞</div>
                <p className="text-lg font-medium mb-2">Dreams</p>
                <p className="opacity-70">Always growing</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Preview */}
        <AnimatedSection className="py-20">
          <div className={`${isDark ? 'bg-gray-800/30' : 'bg-gray-100/30'} rounded-3xl mx-4 sm:mx-6 lg:mx-8`}>
            <div className="max-w-4xl mx-auto px-8 py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Know More?
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                I'd love to connect with you! Whether you have questions about my journey, 
                want to discuss graphic design, or just want to have a friendly conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/gallery">View My Photos</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ThemeProvider>
  )
}

export default About
