import styles from './PhoneMockup.module.css'

interface Props {
  children: React.ReactNode
  size?: 'sm' | 'md'
  tilt?: number
}

export function PhoneMockup({ children, size = 'md', tilt = 0 }: Props) {
  return (
    <div
      className={`${styles.phone} ${styles[size]}`}
      style={{ transform: `rotateY(${tilt}deg) rotateX(3deg)` }}
    >
      {children}
    </div>
  )
}