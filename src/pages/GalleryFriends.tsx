
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'

const GalleryFriends = () => {
  const friendPhotos = [
    "/lovable-uploads/62f4893e-5b9f-4a3e-b572-38d88c4c5790.png",
    "/lovable-uploads/a224e7d6-546b-438a-ac19-08aed20ab667.png",
    "/lovable-uploads/10582e68-548d-4072-9b5c-76e0db2d490a.png"
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
                Friends Gallery
              </h1>
              <p className="text-xl opacity-80">Memories with my amazing friends</p>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {friendPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={photo}
                      alt={`Friend photo ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
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

export default GalleryFriends
