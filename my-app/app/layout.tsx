import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { NavbarComponent } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
      template: '%s | RianVitor26',
      default: 'Sobre | RianVitor26',
  },
  description: 'Site portifólio de RianVitor26',
  authors: {name: 'RianVitor26'},
  colorScheme: 'light',
  keywords: ['Portifólio', 'RianVitor26', 'Rian Vitor'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={raleway.className}>
        <NavbarComponent/>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
