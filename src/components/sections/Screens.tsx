'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PhoneMockup } from '@/components/ui/PhoneMackup'
import { LoginScreen } from '@/components/phone-screen/LoginScreen'
import { TimerScreen } from '@/components/phone-screen/TimerScreen'
import { ProfileScreen } from '@/components/phone-screen/ProfileScreen'
import styles from './Screens.module.css'

export function Screens() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.1 })
  const phonesRef = useScrollReveal<HTMLDivElement>({ y: 60, stagger: 0.15, scale: 0.94, start: 'top 80%' })

  return (
    <section className={styles.section} id="telas">
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <span className={styles.label} data-reveal>Telas</span>
          <h2 className={styles.title} data-reveal>Bonito em cada momento</h2>
        </div>
        <div className={styles.phones} ref={phonesRef}>
          <div data-reveal>
            <PhoneMockup tilt={-8}>
              <LoginScreen />
            </PhoneMockup>
          </div>
          <div data-reveal>
            <PhoneMockup size="md">
              <TimerScreen />
            </PhoneMockup>
          </div>
          <div data-reveal>
            <PhoneMockup tilt={8}>
              <ProfileScreen />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  )
}
