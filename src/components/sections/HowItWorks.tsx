'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import xicara0   from '@/assets/xicara-0.png'
import xicara50  from '@/assets/xicara-50.png'
import xicara100 from '@/assets/xicara-100.png'
import styles from './HowItWorks.module.css'

const PHASES = [
  { label: '25m', name: 'foco',      type: 'focus' as const },
  { label: '5m',  name: 'pausa',     type: 'pause' as const },
  { label: '25m', name: 'foco',      type: 'focus' as const },
  { label: '5m',  name: 'conclusão', type: 'pause' as const },
]

const STEPS = [
  {
    image: xicara0,
    pct: '0%',
    title: 'Comece vazio',
    desc: '25 min de foco enchem a xícara de 0% a 50%. A fumaça aparece na metade do caminho.',
  },
  {
    image: xicara50,
    pct: '50%',
    title: 'Metade do caminho',
    desc: 'Pausa de 5 min: o café assenta em 50%. Respire — a segunda sessão te espera.',
  },
  {
    image: xicara100,
    pct: '100%',
    title: 'Café pronto',
    desc: 'A segunda sessão leva a xícara a 100%. Selo de conclusão e brilho ao completar.',
  },
]

export function HowItWorks() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.1 })
  const stepsRef  = useScrollReveal<HTMLDivElement>({ y: 50, stagger: 0.18, scale: 0.95, start: 'top 78%' })

  return (
    <section className={styles.section} id="como-funciona">
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <span className={styles.label} data-reveal>Como funciona</span>
          <h2 className={styles.title} data-reveal>Uma hora, quatro fases, uma xícara</h2>
          <p className={styles.subtitle} data-reveal>
            O nível do café é atrelado ao relógio em tempo real — nunca dessincroniza. Você acompanha o foco subindo de forma suave e contínua.
          </p>
        </div>

        <div className={styles.timeline}>
          {PHASES.map((phase, i) => (
            <div
              key={i}
              className={`${styles.phase} ${phase.type === 'focus' ? styles.phaseFocus : styles.phasePause}`}
            >
              <div className={styles.phaseBar} />
              <span className={styles.phaseTime}>{phase.label}</span>
              <span className={styles.phaseName}>{phase.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.steps} ref={stepsRef}>
          {STEPS.map(step => (
            <div key={step.pct} className={styles.step} data-reveal>
              <div className={styles.cupWrap}>
                <Image
                  src={step.image}
                  alt={`Xícara ${step.pct} cheia`}
                  width={160}
                  height={160}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className={styles.pct}>{step.pct}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
