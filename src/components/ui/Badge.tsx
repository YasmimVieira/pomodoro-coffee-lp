import styles from './Badge.module.css'

interface Props {
  children: React.ReactNode
}

export function Badge({ children }: Props) {
  return (
    <div className={styles.badge}>
      <span className={styles.dot} />
      <span>{children}</span>
    </div>
  )
}
