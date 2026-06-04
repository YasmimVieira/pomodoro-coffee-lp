'use client'

import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { CoffeeCup } from '@/components/ui/CoffeeCup'
import { StoreButton } from '@/components/ui/StoreButton'
import styles from './Hero.module.css'

const STORE_LINKS = [
  { icon: '🍎', topLabel: 'Baixe na', name: 'App Store', href: '#' },
  { icon: '▶', topLabel: 'Disponível no', name: 'Google Play', href: '#' },
]

export function Hero() {
  const [fill, setFill] = useState(0)

  useEffect(() => {
    let startTime: number
    const target = 0.78
    const duration = 2200

    const delay = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const t = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setFill(eased * target)
        if (t < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, 600)

    return () => clearTimeout(delay)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
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
            <div className={styles.stat}>
              <span className={styles.statValue}>4,9★</span>
              <span className={styles.statLabel}>App Store</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>120k+</span>
              <span className={styles.statLabel}>ciclos por dia</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}>anúncios</span>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <CoffeeCup fill={fill} size={300} showSteam={fill > 0.4} />
        </div>
      </div>
    </section>
  )
}
