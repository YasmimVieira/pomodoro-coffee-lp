import Image from 'next/image'
import imagem4 from '@/assets/imagem-4.png'

export function LoginScreen() {
  return (
    <Image
      src={imagem4}
      alt="Tela de login do Pomodoro Coffee"
      fill
      style={{ objectFit: 'cover', objectPosition: 'top' }}
    />
  )
}
