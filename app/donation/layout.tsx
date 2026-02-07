import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donation - Shri Shirdi Sai Baba Temple | Contribute to Shri Shirdi Sai Seva Trust',
  description: 'Contribute voluntarily to Shri Shirdi Sai Seva Trust. Bank account details for online fund transfer, NEFT, RTGS, IMPS. 80G and 12A certificates available for tax benefits.',
}

export default function DonationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
