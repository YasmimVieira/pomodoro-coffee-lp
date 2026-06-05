import { StoreButton } from '@/components/ui/StoreButton'
import styles from './CtaSection.module.css'

export function CtaSection() {
  return (
    <section className={styles.section} id="baixar">
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.icon}>☕</div>
          <h2 className={styles.title}>
            Sua próxima hora de foco<br />começa agora
          </h2>
          <p className={styles.description}>
            Grátis para baixar. Disponível para iOS e Android.
          </p>
          <div className={styles.buttons}>
            <StoreButton icon="🍎" topLabel="Baixe na" name="App Store" href="#" variant="highlighted" />
            <StoreButton icon="▶" topLabel="Disponível no" name="Google Play" href="#" variant="highlighted" />
          </div>
        </div>
      </div>
    </section>
  )
}
