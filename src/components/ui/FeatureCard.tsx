import type { Feature } from '@/types'
import styles from './FeatureCard.module.css'

export function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}