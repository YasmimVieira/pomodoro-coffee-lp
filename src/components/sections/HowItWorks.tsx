import { CoffeeCup } from '@/components/ui/CoffeeCup'
import styles from './HowItWorks.module.css'

const PHASES = [
  { label: '25m', name: 'foco', type: 'focus' as const },
  { label: '5m', name: 'pausa', type: 'pause' as const },
  { label: '25m', name: 'foco', type: 'focus' as const },
  { label: '5m', name: 'conclusão', type: 'pause' as const },
]

const STEPS = [
  {
    fill: 0,
    pct: '0%',
    title: 'Comece vazio',
    desc: '25 min de foco enchem a xícara de 0% a 50%. A fumaça aparece na metade do caminho.',
    showSteam: false,
    showCheck: false,
  },
  {
    fill: 0.5,
    pct: '50%',
    title: 'Metade do caminho',
    desc: 'Pausa de 5 min: o café assenta em 50%. Respire — a segunda sessão te espera.',
    showSteam: true,
    showCheck: false,
  },
  {
    fill: 1,
    pct: '100%',
    title: 'Café pronto',
    desc: 'A segunda sessão leva a xícara a 100%. Selo de conclusão e brilho ao completar.',
    showSteam: true,
    showCheck: true,
  },
]

export function HowItWorks() {
  return (
    <section className={styles.section} id="como-funciona">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Como funciona</span>
          <h2 className={styles.title}>Uma hora, quatro fases, uma xícara</h2>
          <p className={styles.subtitle}>
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

        <div className={styles.steps}>
          {STEPS.map(step => (
            <div key={step.pct} className={styles.step}>
              <CoffeeCup
                fill={step.fill}
                size={140}
                showSteam={step.showSteam}
                showCheck={step.showCheck}
              />
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
