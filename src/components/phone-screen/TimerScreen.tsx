import Image from 'next/image'
import imagem6 from '@/assets/imagem-6.png'

export function TimerScreen() {
  return (
    <Image
      src={imagem6}
      alt="Tela do timer com xícara enchendo"
      fill
      style={{ objectFit: 'cover', objectPosition: 'top' }}
    />
  )
}
