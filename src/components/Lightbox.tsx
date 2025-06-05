
import { motion, AnimatePresence } from 'framer-motion'
import { useGalleryStore } from '@/lib/store'
import { useEffect } from 'react'

export function Lightbox() {
  const { selectedImage, setSelectedImage, images } = useGalleryStore()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, images.length, setSelectedImage])

  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            src={images[selectedImage]}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {images.length}
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            ←
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
