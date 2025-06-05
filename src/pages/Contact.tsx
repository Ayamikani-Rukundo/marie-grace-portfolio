import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useThemeStore } from '@/lib/store'
import { Footer } from '@/components/Footer'

const Contact = () => {
  const { isDark } = useThemeStore()

  const contactMethods = [
    {
      platform: "Email",
      handle: "gracemukeshimana@gmail.com",
      description: "Best way to reach me for serious conversations or collaborations",
      icon: "📧",
      color: "from-blue-500 to-blue-600",
      href: "mailto:gracemukeshimana@gmail.com"
    },
    {
      platform: "Facebook",
      handle: "Sia Tety",
      description: "Connect with me on Facebook for casual chats and updates",
      icon: "📘",
      color: "from-blue-600 to-indigo-600",
      href: "#"
    },
    {
      platform: "LinkedIn",
      handle: "Mukeshimana Marie Grace",
      description: "Professional networking and career-related discussions",
      icon: "💼",
      color: "from-blue-700 to-blue-800",
      href: "#"
    },
    {
      platform: "Instagram",
      handle: "@marie_grace_m",
      description: "Follow my visual journey and creative projects",
      icon: "📷",
      color: "from-pink-500 to-purple-600",
      href: "#"
    }
  ]

  const reasonsToContact = [
    {
      title: "Graphic Design Collaboration",
      description: "Want to work together on a design project? I'm always excited to learn and collaborate.",
      icon: "🎨"
    },
    {
      title: "Coding Questions",
      description: "Fellow student struggling with C++, Java, or web development? Let's figure it out together.",
      icon: "💻"
    },
    {
      title: "Life Advice Chat",
      description: "Need someone to listen or help think through a problem? I'm here for genuine conversations.",
      icon: "💭"
    },
    {
      title: "School Connections",
      description: "Are you from Nyagatare Secondary School or nearby? Would love to connect with fellow students.",
      icon: "🏫"
    },
    {
      title: "Creative Feedback",
      description: "Want honest feedback on your own projects? I believe in supporting each other's growth.",
      icon: "🤝"
    },
    {
      title: "Just Say Hi",
      description: "Sometimes the best conversations start with a simple hello. Don't hesitate to reach out!",
      icon: "👋"
    }
  ]

  const responseExpectations = [
    "I usually respond to emails within 1-2 days",
    "Facebook messages get quicker responses during evenings",
    "Be patient with LinkedIn - I check it less frequently",
    "I prefer meaningful conversations over small talk",
    "Don't hesitate to follow up if I haven't responded"
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Let's
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                I'd love to hear from you! Whether it's about design, coding, life advice, or just a friendly chat.
              </p>
              <p className="text-lg opacity-80 max-w-4xl mx-auto leading-relaxed">
                I believe in authentic connections and meaningful conversations. 
                Don't hesitate to reach out - I'm always excited to meet new people 
                and share experiences with fellow students and creatives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Ways to Reach Me
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Choose the platform that works best for you - I'm active on all of these.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.platform}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full group cursor-pointer`}>
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-4xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {method.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2">{method.platform}</h3>
                      <p className={`text-sm mb-3 bg-gradient-to-r ${method.color} bg-clip-text text-transparent font-medium`}>
                        {method.handle}
                      </p>
                      <p className="opacity-80 text-xs mb-4 leading-relaxed">{method.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`w-full group-hover:bg-gradient-to-r group-hover:${method.color} group-hover:text-white group-hover:border-transparent transition-all duration-300`}
                        onClick={() => window.open(method.href, '_blank')}
                      >
                        Connect
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Reasons to Contact */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Great Reasons to Get in Touch
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Here are some ways we could connect and help each other grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {reasonsToContact.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full`}>
                    <CardContent className="p-6">
                      <motion.div 
                        className="text-3xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {reason.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                      <p className="opacity-80 text-sm leading-relaxed">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Response Expectations */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                What to Expect When You Reach Out
              </h2>
              <p className="text-lg opacity-80">
                Being transparent about my communication style and response times.
              </p>
            </div>

            <div className="space-y-4 mb-16">
              {responseExpectations.map((expectation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm flex items-center space-x-4 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                    ✓
                  </div>
                  <p className="opacity-90">{expectation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Ready to Connect?
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                Don't overthink it - just send me a message! I'm always excited to meet new people, 
                learn from different perspectives, and share experiences. Whether you want to collaborate, 
                need advice, or just want to chat, I'm here for genuine conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('mailto:gracemukeshimana@gmail.com', '_blank')}
                >
                  Send Me an Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('#', '_blank')}
                >
                  Connect on Facebook
                </Button>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Contact
