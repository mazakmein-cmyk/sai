'use client'

import { useState } from 'react'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_CONFIG } from '@/lib/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show an alert
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Please share your feedback
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Founder Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Founder and Chairman of Shri Shirdi Sai Seva Trust
              </h3>
              <p className="text-lg font-semibold text-saffron-600 mb-4">
                Name: Sridhara Swamy
              </p>
              <a
                href={SITE_CONFIG.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Message us on WhatsApp</span>
              </a>
            </div>
            
            {/* Temple Location */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Shri Shirdi Sai Baba Temple
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <HiLocationMarker className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Shri Shirdi Sai Baba Temple, Kallahally, Karnataka, India
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Kallahally,+Hoskote,+Bengaluru+Rural,+Karnataka+562114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-saffron-600 hover:text-saffron-700 transition-colors"
                >
                  <span>Get directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
