'use client'

import { useState } from 'react'
import { HiLocationMarker, HiClock, HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_CONFIG } from '@/lib/constants'
import Toast from '@/components/Toast'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setToastMessage('Message sent successfully!')
        setShowToast(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setToastMessage('Failed to send message. Please try again.')
        setShowToast(true)
      }
    } catch (error) {
      setToastMessage('An error occurred. Please try again.')
      setShowToast(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919113931148')
    setToastMessage('Phone number +91-9113931148 copied')
    setShowToast(true)
  }

  return (
    <div className="pt-24 pb-16">
      <Toast
        message={toastMessage || "Phone number +91-9113931148 copied"}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="heading-primary text-saffron-700 mb-4">
              Contact Us
            </h1>
            <p className="text-body text-lg text-gray-600">
              Please visit our Temple premises
            </p>
            <p className="text-body text-gray-600 mt-2">
              Contact us via WhatsApp for any clarifications
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Please share your feedback / queries
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
              {/* WhatsApp Contact */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Contact us via WhatsApp
                </h3>
                <div className="flex flex-col space-y-3">
                  <a
                    href={SITE_CONFIG.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors bg-green-50 hover:bg-green-100 px-6 py-3 rounded-lg font-medium w-fit"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                    <span>Message us on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-saffron-600 transition-colors group px-6"
                    aria-label="Copy phone number"
                  >
                    <HiPhone className="w-4 h-4 text-gray-500 group-hover:text-saffron-600" />
                    <span>+91-9113931148</span>
                  </button>
                </div>
              </div>

              {/* Temple Address */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Shri Shirdi Sai Baba Temple Address
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <HiLocationMarker className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      Shri Shirdi Sai Baba Temple, Kallahally, Karnataka, India
                    </p>
                  </div>
                  <a
                    href={SITE_CONFIG.contact.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-saffron-600 hover:text-saffron-700 transition-colors font-medium"
                  >
                    <span>Get directions</span>
                  </a>
                </div>
              </div>

              {/* Temple Hours */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <HiClock className="w-5 h-5 text-saffron-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Temple Timings</p>
                      <p className="text-gray-600">9:00 AM to 8:00 PM (All days)</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 text-gray-700 font-semibold">Open today</th>
                          <th className="text-right py-2 text-gray-700 font-semibold">09:00 am – 08:00 pm</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {/* Founder Info */}
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Founder and Chairman of Shri Shirdi Sai Seva Trust
                </h3>
                <p className="text-lg font-semibold text-saffron-600 mb-4">
                  Name: {SITE_CONFIG.founder.name}
                </p>
                <div className="flex flex-col space-y-3">
                  <a
                    href={SITE_CONFIG.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-medium"
                    aria-label="Message us on WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Message us on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-saffron-600 transition-colors group"
                    aria-label="Copy phone number"
                  >
                    <HiPhone className="w-4 h-4 text-gray-500 group-hover:text-saffron-600" />
                    <span>+91-9113931148</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8">
            <h2 className="heading-secondary text-center mb-8">
              Find Us on Map
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.87041654512828!2d77.79045167661567!3d13.10383225790908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0517e6ad26e9%3A0x8afed6807b56ccc2!2sShri%20Shirdi%20Sai%20Baba%20Temple!5e0!3m2!1sen!2sin!4v1770495698426!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Location:</strong> Shri Shirdi Sai Baba Temple, Kallahally, Hoskote, Bengaluru Rural- 562114
                </p>
                <a
                  href="https://maps.google.com/?q=Kallahally,+Hoskote,+Bengaluru+Rural,+Karnataka+562114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-saffron-600 hover:text-saffron-700 font-medium transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
