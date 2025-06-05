import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useThemeStore, useGalleryStore } from '@/lib/store'
import { Footer } from '@/components/Footer'

const Gallery = () => {
  const { isDark } = useThemeStore()
  const { setSelectedImage, setImages } = useGalleryStore()

  const galleryImages = [
    "/lovable-uploads/61d1d45d-256d-4f76-8594-f9e75afd065a.png",
    "/lovable-uploads/10582e68-548d-4072-9b5c-76e0db2d490a.png",
    "/lovable-uploads/62f4893e-5b9f-4a3e-b572-38d88c4c5790.png",
    "/lovable-uploads/a224e7d6-546b-438a-ac19-08aed20ab667.png",
    "/lovable-uploads/3416da7d-d386-4c00-90fe-0d60e03c7376.png",
    "/lovable-uploads/d9c78086-37dd-4dd9-a318-874d8b4a42d9.png"
  ]

  const galleryCategories = [
    {
      title: "School Friends",
      description: "Memories with my classmates at Nyagatare Secondary School",
      path: "/gallery/friends",
      image: "/lovable-uploads/62f4893e-5b9f-4a3e-b572-38d88c4c5790.png",
      count: "15+ Photos"
    },
    {
      title: "Special Events",
      description: "Formal occasions, celebrations, and memorable moments",
      path: "/gallery/events",
      image: "/lovable-uploads/61d1d45d-256d-4f76-8594-f9e75afd065a.png",
      count: "10+ Photos"
    },
    {
      title: "My Designs",
      description: "Creative work and design projects I've completed",
      path: "/gallery/designs",
      image: "/lovable-uploads/3416da7d-d386-4c00-90fe-0d60e03c7376.png",
      count: "12+ Designs"
    }
  ]

  useEffect(() => {
    setImages(galleryImages)
  }, [setImages])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Gallery &
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                  Memories
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Capturing authentic moments with friends, family, and my creative journey through photos.
              </p>
              <p className="text-lg opacity-80 max-w-4xl mx-auto leading-relaxed">
                These photos tell the real story of my life - from hanging out with friends at school 
                to special family moments and showcasing my design work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Gallery Grid */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
                Featured Photos
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Click on any photo to view it in full size and navigate through the collection.
              </p>
            </div>

            {/* Masonry Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">View Full Size</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Categories */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent">
                Browse by Category
              </h2>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Explore different collections of photos organized by themes and occasions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryCategories.map((category, index) => (
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
                        <Link to={category.path}>View Collection</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Actions */}
        <AnimatedSection className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Explore More Collections
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0">
                <Link to="/gallery/friends">Friends Gallery</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery/school">School Memories</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery/designs">My Designs</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ThemeProvider>
  )
}

export default Gallery
