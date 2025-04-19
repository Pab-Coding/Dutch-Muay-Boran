'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook for responsive design that detects if the current viewport matches a media query
 * @param query The media query to check, e.g. '(max-width: 768px)'
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  // Default to false on the server to prevent hydration mismatches
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    // Create a media query list
    const media = window.matchMedia(query)
    
    // Function to update the state
    const updateMatches = () => {
      setMatches(media.matches)
    }
    
    // Set the initial value
    updateMatches()
    
    // Add the listener
    media.addEventListener('change', updateMatches)
    
    // Clean up
    return () => {
      media.removeEventListener('change', updateMatches)
    }
  }, [query])
  
  return matches
}
