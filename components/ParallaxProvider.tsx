'use client'

import { createContext, useContext, ReactNode } from 'react'

interface ParallaxContextType {
  scrollY: number
}

const ParallaxContext = createContext<ParallaxContextType>({ scrollY: 0 })

export const useParallax = () => useContext(ParallaxContext)

export default function ParallaxProvider({ children }: { children: ReactNode }) {
  return (
    <ParallaxContext.Provider value={{ scrollY: 0 }}>
      {children}
    </ParallaxContext.Provider>
  )
}