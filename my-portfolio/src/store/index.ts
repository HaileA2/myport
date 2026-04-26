import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ThemeStore {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  toggleTheme: () => void
}

export interface LanguageStore {
  language: 'en' | 'am' | 'om'
  setLanguage: (language: 'en' | 'am' | 'om') => void
}

export interface NotificationStore {
  notifications: Array<{
    id: string
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
    duration?: number
  }>
  addNotification: (notification: Omit<NotificationStore['notifications'][0], 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export interface UIStore {
  isLoading: boolean
  setLoading: (loading: boolean) => void
  scrollProgress: number
  setScrollProgress: (progress: number) => void
  customCursor: {
    x: number
    y: number
    isHovering: boolean
  }
  setCustomCursor: (cursor: Partial<UIStore['customCursor']>) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }))
    }),
    {
      name: 'theme-storage'
    }
  )
)

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (language) => set({ language })
    }),
    {
      name: 'language-storage'
    }
  )
)

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],
  addNotification: (notification) => {
    const id = Math.random().toString(36).substring(7)
    const newNotification = { ...notification, id }
    
    set((state) => ({
      notifications: [...state.notifications, newNotification]
    }))

    // Auto remove notification after duration
    if (notification.duration !== 0) {
      setTimeout(() => {
        get().removeNotification(id)
      }, notification.duration || 5000)
    }
  },
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id)
  })),
  clearNotifications: () => set({ notifications: [] })
}))

export const useUIStore = create<UIStore>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  customCursor: {
    x: 0,
    y: 0,
    isHovering: false
  },
  setCustomCursor: (cursor) => set((state) => ({
    customCursor: { ...state.customCursor, ...cursor }
  }))
}))

// Combined store type for convenience
export type AppStore = ThemeStore & LanguageStore & NotificationStore & UIStore
