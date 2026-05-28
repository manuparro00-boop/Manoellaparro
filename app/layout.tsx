import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manoella Parro — Videomaker & Estrategista Digital',
  description:
    'Portfólio de Manoella Parro — Videomaker, Estrategista Digital e Social Media Manager em São Paulo. Criando conteúdo que comunica desde 2023.',
  keywords: [
    'videomaker',
    'estrategista digital',
    'social media',
    'São Paulo',
    'produção audiovisual',
    'conteúdo digital',
    'identidade visual',
  ],
  authors: [{ name: 'Manoella Parro' }],
  creator: 'Manoella Parro',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Manoella Parro — Videomaker & Estrategista Digital',
    description: 'Criatividade com estratégia. Portfólio de Manoella Parro.',
    siteName: 'Manoella Parro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manoella Parro — Videomaker & Estrategista Digital',
    description: 'Criatividade com estratégia. Portfólio de Manoella Parro.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-cream-light text-charcoal">{children}</body>
    </html>
  )
}
