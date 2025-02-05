'use client'

import { memo } from 'react'
import { MotionHeader } from '../shared/MotionComponents'

// Define animation props outside the component for reuse.
const headerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
}

const HomeHeader = () => {
  return (
    <MotionHeader 
      className="w-full relative"
      {...headerAnimation}
    >
    </MotionHeader>
  )
}

export default memo(HomeHeader)
