'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import gsap from 'gsap'
import { Badge } from '@/components/ui/Badge'
import { StoreButton } from '@/components/ui/StoreButton'
import styles from './Hero.module.css'

import xicara0   from '@/assets/xicara-0.png'
import xicara25  from '@/assets/xicara-25.png'
import xicara50  from '@/assets/xicara-50.png'
import xicara75  from '@/assets/xicara-75.png'

const STORE_LINKS = [
  { icon: '🍎', topLabel: 'Baixe na', name: 'App Store', href: '#' },
  { icon: '▶', topLabel: 'Disponível no', name: 'Google Play', href: '#' },
]

function getCupImage(fill: number): StaticImageData {
  if (fill < 0.15) return xicara0
  if (fill < 0.40) return xicara25
  if (fill < 0.65) return xicara50
  return xicara75
}

export function Hero() {
  const [fill, setFill] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const cupRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current!.children, {
        y: 30, opacity: 0, duration: 0.8,
        stagger: 0.1, ease: 'power3.out', delay: 0.2,
      })
      gsap.from(cupRef.current, {
        y: 50, opacity: 0, scale: 0.92, duration: 1.1,
        ease: 'power3.out', delay: 0.4,
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let startTime: number
    const target = 0.78
    const duration = 2200

    const delay = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const t = Math.min((timestamp - startTime) / duration, 1)
        setFill((1 - Math.pow(1 - t, 3)) * target)
        if (t < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, 800)

    return () => clearTimeout(delay)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content} ref={contentRef}>
          <Badge>Técnica Pomodoro · 60 min</Badge>
          <h1 className={styles.title}>
            Foco que você<br />
            <span className={styles.highlight}>vê encher.</span>
          </h1>
          <p className={styles.description}>
            Cada sessão de foco enche sua xícara de café — gole a gole, de 0% a 100%. Uma hora de concentração transformada num ritual visual e calmo.
          </p>
          <div className={styles.buttons}>
            {STORE_LINKS.map(link => (
              <StoreButton key={link.name} {...link} />
            ))}
          </div>
          <div className={styles.stats}>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}>anúncios</span>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.cupGlow} ref={cupRef}>
            <Image
              src={getCupImage(fill)}
              alt="Xícara de café enchendo"
              width={320}
              height={320}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
