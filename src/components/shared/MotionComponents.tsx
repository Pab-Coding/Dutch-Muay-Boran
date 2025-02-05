'use client'

import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type MotionTags = keyof typeof motion

/**
 * Creates a memoized motion component with proper TypeScript types and forwarded refs.
 * @param tag - The HTML element tag to create a motion component for
 */
function createMotionComponent<T extends MotionTags>(tag: T) {
  const MotionComponent = motion[tag]
  return React.memo(MotionComponent)
}

// Layout components
export const MotionHeader = createMotionComponent('header')
export const MotionNav = createMotionComponent('nav')
export const MotionMain = createMotionComponent('main')
export const MotionFooter = createMotionComponent('footer')
export const MotionSection = createMotionComponent('section')
export const MotionArticle = createMotionComponent('article')
export const MotionAside = createMotionComponent('aside')

// Container components
export const MotionDiv = createMotionComponent('div')

// Interactive components
export const MotionButton = createMotionComponent('button')
export const MotionA = createMotionComponent('a')

// List components
export const MotionUl = createMotionComponent('ul')
export const MotionOl = createMotionComponent('ol')
export const MotionLi = createMotionComponent('li')

// Text components
export const MotionH1 = createMotionComponent('h1')
export const MotionH2 = createMotionComponent('h2')
export const MotionH3 = createMotionComponent('h3')
export const MotionH4 = createMotionComponent('h4')
export const MotionP = createMotionComponent('p')
export const MotionSpan = createMotionComponent('span')

// Media components
export const MotionImg = createMotionComponent('img')
export const MotionFigure = createMotionComponent('figure')
export const MotionVideo = createMotionComponent('video')
