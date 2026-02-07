import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shri Shirdi Sai Baba Temple - Shri Shirdi Sai Seva Trust',
  description: 'Welcome to Shri Shirdi Sai Baba Temple. Located in Kallahally village, Hoskote, Bengaluru Rural. Devoted to serving Sai Baba and the community.',
  keywords: 'Shri Shirdi Sai Baba Temple, Sai Baba, Hoskote, Bengaluru, Temple, Devotion, Seva Trust',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
