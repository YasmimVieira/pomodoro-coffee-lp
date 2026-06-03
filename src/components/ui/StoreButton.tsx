import type { StoreLink } from '@/types'
import styles from './StoreButton.module.css'

type Props = Pick<StoreLink, 'icon' | 'topLabel' | 'name' | 'href'> & {
  variant?: 'default' | 'highlighted'
}

export function StoreButton({
  icon, topLabel, name, href, variant = 'default',
}: Props) {
  return (
    <a
      href={href}
      className={`${styles.btn} ${variant === 'highlighted' ? styles.highlighted : ''}`}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>
        <span className={styles.top}>{topLabel}</span>
        <span className={styles.name}>{name}</span>
      </span>
    </a>
  )
}