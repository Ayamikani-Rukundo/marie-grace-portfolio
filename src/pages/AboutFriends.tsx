
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'

const AboutFriends = () => {
  const friends = [
    {
      name: "Ayamikani Rukundo",
      role: "Seatmate & Life Mate",
      email: "rukundoayamikani20@gmail.com",
      instagram: "ayamikani_rukundo",
      description: "My closest friend and seatmate. We share everything and support each other through all challenges."
    },
    {
      name: "Niyingenera Eritah",
      role: "Adventist Pastor at School",
      description: "A spiritual guide and friend who brings wisdom and faith to our school community."
    },
    {
      name: "Keza Denyse",
      role: "Classmate",
      description: "A wonderful friend who brings joy and energy to our class."
    },
    {
      name: "Ngenzi Brave",
      role: "School Friend",
      description: "A reliable friend who's always there when needed."
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent">
                My Friends
              </h1>
              <p className="text-xl opacity-80">The amazing people in my life</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {friends.map((friend, index) => (
                <motion.div
                  key={friend.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{friend.name}</h3>
                      <p className="text-blue-500 font-medium mb-3">{friend.role}</p>
                      <p className="text-sm leading-relaxed mb-4">{friend.description}</p>
                      {friend.email && (
                        <p className="text-sm opacity-80">📧 {friend.email}</p>
                      )}
                      {friend.instagram && (
                        <p className="text-sm opacity-80">📱 @{friend.instagram}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">The Value of Friendship</h2>
              <p className="text-lg leading-relaxed mb-6">
                My friends are incredibly important to me. They make school life enjoyable and provide 
                support when things get challenging. We help each other with studies, share our dreams, 
                and create memories that will last a lifetime.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">How We Support Each Other</h2>
              <p className="text-lg leading-relaxed mb-6">
                We have a strong bond where everyone feels comfortable sharing their problems. I often 
                find myself in the role of advisor, helping friends think through difficult situations. 
                It's something I genuinely enjoy and feel good at.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default AboutFriends
