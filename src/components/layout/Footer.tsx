import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span>☕</span>
          <span>Pomodoro Coffee</span>
        </div>
        <nav className={styles.links}>
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#telas">Telas</a>
          <a href="#baixar">Baixar</a>
        </nav>
        <p className={styles.copy}>© 2026 Pomodoro Coffee · Foco, gole a gole</p>
      </div>
    </footer>
  )
}
