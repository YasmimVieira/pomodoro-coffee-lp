import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>☕</span>
          <span>Pomodoro Coffee</span>
        </a>
        <div className={styles.links}>
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#telas">Telas</a>
        </div>
        <a href="#baixar" className={styles.cta}>Baixar grátis</a>
      </div>
    </nav>
  )
}
