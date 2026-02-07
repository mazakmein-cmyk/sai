'use client'

import { HiBanknotes, HiDocumentText } from 'react-icons/hi2'
import { SITE_CONFIG } from '@/lib/constants'

export default function Donation() {
  const bankDetails = SITE_CONFIG.bankDetails

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert(`Copied to clipboard: ${text}`)
  }

  return (
    <section id="donation" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-secondary text-center mb-4">
            Contribute Voluntarily to Shri Shirdi Sai Seva Trust
          </h2>
          
          <p className="text-center text-gray-600 mb-8">
            Fund Transfer / NEFT / RTGS / IMPS / Quick Pay
          </p>
          
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl shadow-lg p-8 space-y-6">
            <div className="flex items-center justify-center mb-6">
              <HiBanknotes className="w-12 h-12 text-saffron-600" />
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Name</p>
                    <p className="font-semibold text-gray-900">{bankDetails.accountName}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountName)}
                    className="text-saffron-600 hover:text-saffron-700 transition-colors"
                    aria-label="Copy account name"
                  >
                    <HiDocumentText className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Number</p>
                    <p className="font-semibold text-gray-900 font-mono">{bankDetails.accountNumber}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountNumber)}
                    className="text-saffron-600 hover:text-saffron-700 transition-colors"
                    aria-label="Copy account number"
                  >
                    <HiDocumentText className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">IFSC Code</p>
                    <p className="font-semibold text-gray-900 font-mono">{bankDetails.ifscCode}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.ifscCode)}
                    className="text-saffron-600 hover:text-saffron-700 transition-colors"
                    aria-label="Copy IFSC code"
                  >
                    <HiDocumentText className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bank & Branch</p>
                    <p className="font-semibold text-gray-900">{bankDetails.bank}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.bank)}
                    className="text-saffron-600 hover:text-saffron-700 transition-colors"
                    aria-label="Copy bank name"
                  >
                    <HiDocumentText className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-saffron-200">
              <p className="text-sm text-gray-600 text-center">
                We have got 80G and 12A certificate from IncomeTax Department
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
