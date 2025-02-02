'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

export const MotionHeader = forwardRef<HTMLElement, HTMLMotionProps<"header">>((props, ref) => {
  return <motion.header ref={ref} {...props} />
})

export const MotionSection = forwardRef<HTMLElement, HTMLMotionProps<"section">>((props, ref) => {
  return <motion.section ref={ref} {...props} />
})

export const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>((props, ref) => {
  return <motion.div ref={ref} {...props} />
})

export const MotionButton = forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>((props, ref) => {
  return <motion.button ref={ref} {...props} />
})

export const MotionSpan = forwardRef<HTMLSpanElement, HTMLMotionProps<"span">>((props, ref) => {
  return <motion.span ref={ref} {...props} />
})

export const MotionH1 = forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>((props, ref) => {
  return <motion.h1 ref={ref} {...props} />
})

export const MotionH2 = forwardRef<HTMLHeadingElement, HTMLMotionProps<"h2">>((props, ref) => {
  return <motion.h2 ref={ref} {...props} />
})

export const MotionP = forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>((props, ref) => {
  return <motion.p ref={ref} {...props} />
})

MotionSection.displayName = 'MotionSection'
MotionDiv.displayName = 'MotionDiv'
MotionButton.displayName = 'MotionButton'
MotionSpan.displayName = 'MotionSpan'
MotionH1.displayName = 'MotionH1'
MotionH2.displayName = 'MotionH2'
MotionP.displayName = 'MotionP'
MotionHeader.displayName = 'MotionHeader'
