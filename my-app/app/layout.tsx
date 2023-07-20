import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { NavbarComponent } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RianVitor26 | Portifólio',
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
        {children}
        <Footer/>
        </body>
    </html>
  )
}
