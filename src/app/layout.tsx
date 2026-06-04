import type { Metadata } from 'next'
import '../styles/globals.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pomodoro Coffee — Foco que você vê encher',
  description:
    'Cada sessão de foco enche sua xícara de café — gole a gole, de 0% a 100%. Uma hora de concentração transformada num ritual visual e calmo.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
