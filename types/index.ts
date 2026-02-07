// Type definitions for the application

export interface BankDetails {
  accountName: string
  accountNumber: string
  ifscCode: string
  bank: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface GalleryImage {
  id: number
  title: string
  src: string
  alt: string
}

export interface NavItem {
  name: string
  href: string
}
