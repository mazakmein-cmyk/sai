import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Shri Shirdi Sai Baba Temple | Get in Touch',
  description: 'Contact Shri Shirdi Sai Seva Trust. Visit our temple at Kallahally, Hoskote, Bengaluru Rural. Temple timings: 9:00 AM to 8:00 PM. Message us on WhatsApp.',
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
