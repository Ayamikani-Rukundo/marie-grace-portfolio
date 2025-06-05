import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useThemeStore } from '@/lib/store'
import { Footer } from '@/components/Footer'

const Advice = () => {
  const { isDark } = useThemeStore()

  const adviceCategories = [
    {
      title: "Friendship Problems",
      description: "Helping friends navigate conflicts, misunderstandings, and relationship challenges",
      icon: "👥",
      color: "from-blue-500 to-purple-600",
      count: "15+ conversations"
    },
    {
      title: "Academic Stress",
      description: "Supporting classmates with study pressure, time management, and exam anxiety",
      icon: "📚",
      color: "from-green-500 to-blue-600",
      count: "20+ sessions"
    },
    {
      title: "Personal Decisions",
      description: "Thinking through life choices, future plans, and important decisions together",
      icon: "🤔",
      color: "from-purple-500 to-pink-600",
      count: "10+ discussions"
    },
    {
      title: "Family Issues",
      description: "Listening and offering perspective on family dynamics and communication",
      icon: "👨‍👩‍👧‍👦",
      color: "from-orange-500 to-red-600",
      count: "8+ heart-to-hearts"
    }
  ]

  const myApproach = [
    {
      title: "Listen First",
      description: "I believe in really hearing what my friends are going through before offering any advice."
    },
    {
      title: "Think Deeply",
      description: "I take time to consider different perspectives and think through the situation carefully."
    },
    {
      title: "Share Honestly",
      description: "I give my genuine thoughts, even if they might not be what someone wants to hear."
    },
    {
      title: "Stay Supportive",
      description: "Whatever decision my friends make, I'm there to support them through the outcome."
    }
  ]

  const commonSituations = [
    {
      situation: "Friend conflicts at school",
      approach: "I help both sides understand each other's perspective and find common ground.",
      outcome: "Usually leads to better communication and stronger friendships."
    },
    {
      situation: "Academic pressure and burnout",
      approach: "Share time management techniques and remind friends to take care of their mental health.",
      outcome: "Friends feel less overwhelmed and develop better study habits."
    },
    {
      situation: "Future career uncertainty",
      approach: "Help friends explore their interests and think practically about different paths.",
      outcome: "More clarity about goals and actionable steps forward."
    }
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-blue-600/20 to-purple-600/20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Advice &
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                  Thoughts
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                How I help friends work through problems and my thoughts on life's challenges.
              </p>
              <p className="text-lg opacity-80 max-w-4xl mx-auto leading-relaxed">
                Many of my classmates come to me when they're facing difficult situations. 
                I don't have all the answers, but I enjoy thinking deeply about problems 
                and helping friends see different perspectives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Areas I Help With */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Areas I Help With
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                The kinds of situations where friends often seek my perspective and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {adviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full text-center`}>
                    <CardContent className="p-6">
                      <motion.div 
                        className="text-4xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                      <p className="opacity-80 text-sm mb-4 leading-relaxed">{category.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r ${category.color}`}>
                        {category.count}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* My Approach */}
        <AnimatedSection className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                My Approach to Helping
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                How I try to be genuinely helpful when friends come to me with problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {myApproach.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-blue-500">{approach.title}</h3>
                      <p className="opacity-80 leading-relaxed">{approach.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Real Examples */}
        <AnimatedSection className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-teal-600 bg-clip-text text-transparent">
                Real Situations I've Helped With
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Actual examples of how I've tried to help friends (keeping details private, of course).
              </p>
            </div>

            <div className="space-y-8">
              {commonSituations.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-500 mb-2">Situation</h4>
                      <p className="opacity-80 text-sm">{example.situation}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-500 mb-2">My Approach</h4>
                      <p className="opacity-80 text-sm">{example.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-500 mb-2">Typical Outcome</h4>
                      <p className="opacity-80 text-sm">{example.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Personal Philosophy */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                My Philosophy on Helping Others
              </h2>
              <blockquote className="text-xl md:text-2xl font-light italic mb-8 opacity-90">
                "I balance all dimensions of life"
              </blockquote>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                This principle guides how I approach helping friends. I try to help them see 
                the whole picture - not just the immediate problem, but how it connects to 
                their relationships, studies, family, and future goals.
              </p>
              <p className="text-base opacity-70 leading-relaxed">
                I'm not a counselor or expert - just a friend who cares about seeing people 
                find their way through challenges with wisdom and support.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
              Want to Share or Connect?
            </h2>
            <p className="text-lg opacity-80 mb-8">
              If you're going through something challenging or just want to share thoughts, I'm here to listen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white border-0">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/advice/thoughts">Read My Thoughts</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ThemeProvider>
  )
}

export default Advice
