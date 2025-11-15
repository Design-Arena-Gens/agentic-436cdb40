import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FitPro Gym - Votre Salle de Sport',
  description: 'Rejoignez FitPro Gym pour atteindre vos objectifs fitness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
