'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Options {
  y?: number
  scale?: number
  duration?: number
  stagger?: number
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      const found = element.querySelectorAll('[data-reveal]')
      const targets = found.length ? Array.from(found) : [element]

      gsap.from(targets, {
        scrollTrigger: {
          trigger: element,
          start: options.start ?? 'top 82%',
        },
        y:        options.y        ?? 40,
        scale:    options.scale    ?? 1,
        opacity:  0,
        duration: options.duration ?? 0.85,
        stagger:  options.stagger  ?? 0.12,
        ease:     'power3.out',
        clearProps: 'all',
      })
    }, element)

    return () => ctx.revert()
  }, [])

  return ref
}
