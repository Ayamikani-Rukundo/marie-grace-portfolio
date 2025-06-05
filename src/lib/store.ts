
import { create } from 'zustand'

interface ThemeStore {
  isDark: boolean
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: true,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}))

interface GalleryStore {
  selectedImage: number | null
  setSelectedImage: (index: number | null) => void
  images: string[]
  setImages: (images: string[]) => void
}

export const useGalleryStore = create<GalleryStore>((set) => ({
  selectedImage: null,
  setSelectedImage: (index) => set({ selectedImage: index }),
  images: [],
  setImages: (images) => set({ images }),
}))
