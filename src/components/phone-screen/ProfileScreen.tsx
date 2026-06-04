import Image from 'next/image'
import imagem1 from '@/assets/imagem-1.png'

export function ProfileScreen() {
  return (
    <Image
      src={imagem1}
      alt="Tela de perfil do Pomodoro Coffee"
      fill
      style={{ objectFit: 'cover', objectPosition: 'top' }}
    />
  )
}
