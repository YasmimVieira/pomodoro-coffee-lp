'use client'

import Image, { StaticImageData } from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PhoneMockup } from '@/components/ui/PhoneMackup'
import styles from './Screens.module.css'

import imagem1 from '@/assets/imagem-1.png'
import imagem2 from '@/assets/imagem-2.png'
import imagem3 from '@/assets/imagem-3.png'
import imagem4 from '@/assets/imagem-4.png'
import imagem5 from '@/assets/imagem-5.png'
import imagem6 from '@/assets/imagem-6.png'
import imagem7 from '@/assets/imagem-7.png'

interface Screen {
  src: StaticImageData
  alt: string
  tilt: number
  size: 'sm' | 'md'
}

const SCREENS: Screen[] = [
  { src: imagem4, alt: 'Login',              tilt: -10, size: 'sm' },
  { src: imagem5, alt: 'Criar conta',        tilt: -5,  size: 'sm' },
  { src: imagem2, alt: 'Timer aguardando',   tilt: -2,  size: 'md' },
  { src: imagem6, alt: 'Timer em pausa',     tilt:  0,  size: 'md' },
  { src: imagem7, alt: 'Ciclo completo',     tilt:  2,  size: 'md' },
  { src: imagem1, alt: 'Perfil',             tilt:  5,  size: 'sm' },
  { src: imagem3, alt: 'Configurações',      tilt:  10, size: 'sm' },
]

export function Screens() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.1 })
  const phonesRef = useScrollReveal<HTMLDivElement>({ y: 60, stagger: 0.1, scale: 0.94, start: 'top 80%' })

  return (
    <section className={styles.section} id="telas">
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <span className={styles.label} data-reveal>Telas</span>
          <h2 className={styles.title} data-reveal>Bonito em cada momento</h2>
        </div>
      </div>
      <div className={styles.phones} ref={phonesRef}>
        {SCREENS.map((screen, i) => (
          <div key={i} data-reveal className={styles.phoneItem}>
            <PhoneMockup tilt={screen.tilt} size={screen.size}>
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </PhoneMockup>
          </div>
        ))}
      </div>
    </section>
  )
}
