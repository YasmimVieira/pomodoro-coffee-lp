import { FeatureCard } from '@/components/ui/FeatureCard'
import type { Feature } from '@/types'
import styles from './Features.module.css'

const FEATURES: Feature[] = [
  {
    icon: '⏱',
    title: 'Sincronizado ao relógio',
    description: 'A animação é função pura do tempo decorrido. Saia do app e volte — o nível está sempre certo.',
  },
  {
    icon: '📈',
    title: 'Histórico completo',
    description: 'Cada ciclo concluído vira registro: foco total, sequência de dias e estatísticas no seu perfil.',
  },
  {
    icon: '💡',
    title: 'Calmo por design',
    description: 'Dark mode premium, fumaça suave e zero distração. Sem anúncios, sem ruído visual.',
  },
  {
    icon: '📱',
    title: 'Foco em uma hora',
    description: 'O ciclo clássico de 60 min em quatro fases — 25/5/25/5 — guiado visualmente do início ao fim.',
  },
  {
    icon: '✓',
    title: 'Conclusão recompensadora',
    description: "O selo 'café pronto' e o brilho ao completar a hora dão um fechamento satisfatório a cada sessão.",
  },
  {
    icon: '✨',
    title: 'Pausas que respiram',
    description: 'Nas pausas o café assenta e solta fumaça — um lembrete visual para você descansar antes de voltar.',
  },
]

export function Features() {
  return (
    <section className={styles.section} id="recursos">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Feito para focar de verdade</h2>
        </div>
        <div className={styles.grid}>
          {FEATURES.map(feat => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>
      </div>
    </section>
  )
}
