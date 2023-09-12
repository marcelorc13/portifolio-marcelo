import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Portifólio - Marcelo Ramalho',
  description: 'Portifólio Marcelo Ramalho',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className='bg-gray-100 scroll-smooth'>{children}</body>
    </html>
  )
}
