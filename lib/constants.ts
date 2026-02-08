// Application constants

export const SITE_CONFIG = {
  name: 'Shri Shirdi Sai Seva Trust',
  title: 'Shri Shirdi Sai Baba Temple',
  location: 'Kallahally village, Hoskote, Bengaluru Rural- 562114',
  founder: {
    name: 'Sridhara Swamy',
    title: 'Founder and Chairman of Shri Shirdi Sai Seva Trust',
  },
  trust: {
    name: 'Shri Shirdi Sai Seva Trust',
    established: 2000,
    certificates: ['80G', '12A'],
  },
  bankDetails: {
    accountName: 'Shri Shirdi Sai Seva Trust',
    accountNumber: '32706613827',
    ifscCode: 'SBINO015643',
    bank: 'State Bank of India, Bangalore',
  },
  whatsapp: {
    url: 'https://api.whatsapp.com/send/?phone=919113931148&text&type=phone_number&app_absent=0',
  },
  contact: {
    phone: '+919113931148',
    displayPhone: '+91-9113931148',
    googleMaps: 'https://www.google.com/maps/dir/?api=1&destination=Shri+Shirdi+Sai+Baba+Temple,+Kallahally,+Karnataka',
  },
} as const

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Donation', href: '/donation' },
  { name: 'Contact Us', href: '/contact-us' },
] as const
