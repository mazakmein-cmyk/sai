'use client'

import { useState } from 'react'
import { HiBanknotes } from 'react-icons/hi2'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { SITE_CONFIG } from '@/lib/constants'
import Toast from './Toast'

export default function Donation() {
  const bankDetails = SITE_CONFIG.bankDetails
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setToastMessage(`Copied ${field}: ${text}`)
    setShowToast(true)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const CopyButton = ({ text, field }: { text: string; field: string }) => (
    <button
      onClick={() => copyToClipboard(text, field)}
      className="text-gray-400 hover:text-saffron-600 transition-colors p-2 rounded-full hover:bg-saffron-50 self-start sm:self-center"
      title="Copy to clipboard"
      aria-label={`Copy ${field}`}
    >
      {copiedField === field ? (
        <FiCheck className="w-5 h-5 text-green-500" />
      ) : (
        <FiCopy className="w-5 h-5" />
      )}
    </button>
  )

  return (
    <section id="donation" className="section-padding bg-white">
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-secondary text-center mb-4">
            Contribute Voluntarily to Shri Shirdi Sai Seva Trust
          </h2>

          <p className="text-center text-gray-600 mb-8">
            Fund Transfer / NEFT / RTGS / IMPS / Quick Pay
          </p>

          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl shadow-lg p-5 sm:p-8 space-y-6">
            <div className="flex items-center justify-center mb-6">
              <HiBanknotes className="w-12 h-12 text-saffron-600" />
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Name</p>
                    <p className="font-semibold text-gray-900 break-all sm:break-normal">{bankDetails.accountName}</p>
                  </div>
                  <CopyButton text={bankDetails.accountName} field="accountName" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Number</p>
                    <p className="font-semibold text-gray-900 font-mono break-all sm:break-normal">{bankDetails.accountNumber}</p>
                  </div>
                  <CopyButton text={bankDetails.accountNumber} field="accountNumber" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">IFSC Code</p>
                    <p className="font-semibold text-gray-900 font-mono">{bankDetails.ifscCode}</p>
                  </div>
                  <CopyButton text={bankDetails.ifscCode} field="ifscCode" />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bank & Branch</p>
                    <p className="font-semibold text-gray-900">{bankDetails.bank}</p>
                  </div>
                  <CopyButton text={bankDetails.bank} field="bank" />
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
