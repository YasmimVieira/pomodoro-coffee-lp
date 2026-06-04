import { PhoneMockup } from '@/components/ui/PhoneMackup'
import { LoginScreen } from '@/components/phone-screen/LoginScreen'
import { TimerScreen } from '@/components/phone-screen/TimerScreen'
import { ProfileScreen } from '@/components/phone-screen/ProfileScreen'
import styles from './Screens.module.css'

export function Screens() {
  return (
    <section className={styles.section} id="telas">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Telas</span>
          <h2 className={styles.title}>Bonito em cada momento</h2>
        </div>
        <div className={styles.phones}>
          <PhoneMockup tilt={-8}>
            <LoginScreen />
          </PhoneMockup>
          <PhoneMockup size="md">
            <TimerScreen />
          </PhoneMockup>
          <PhoneMockup tilt={8}>
            <ProfileScreen />
          </PhoneMockup>
        </div>
      </div>
    </section>
  )
}
