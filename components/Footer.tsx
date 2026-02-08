'use client'

import { useState } from 'react'
import { HiHeart, HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_CONFIG } from '@/lib/constants'
import Toast from './Toast'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showToast, setShowToast] = useState(false)

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919113931148')
    setShowToast(true)
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <Toast
        message="Phone number +91-9113931148 copied"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <div className="container-custom section-padding">
        <div className="text-center space-y-4">
          <p className="text-sm">
            Copyright © {currentYear} Shri Shirdi Sai Baba Temple - All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with <HiHeart className="inline w-4 h-4 text-red-500" /> for Shri Shirdi Sai Seva Trust
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap text-sm pt-4">
            <a
              href={SITE_CONFIG.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition-colors"
              aria-label="Message us on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <span className="text-gray-600">|</span>
            <button
              onClick={handleCopyPhone}
              className="flex items-center gap-2 hover:text-saffron-400 transition-colors group"
              aria-label="Copy phone number"
            >
              <HiPhone className="w-4 h-4 text-gray-500 group-hover:text-saffron-400" />
              <span>+91-9113931148</span>
            </button>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-saffron-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-saffron-400 transition-colors">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
