'use client'

import { useState } from 'react'
import { HiBanknotes, HiCheckCircle } from 'react-icons/hi2'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { SITE_CONFIG } from '@/lib/constants'

export default function DonationPage() {
  const bankDetails = SITE_CONFIG.bankDetails
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const CopyButton = ({ text, field }: { text: string; field: string }) => (
    <button
      onClick={() => copyToClipboard(text, field)}
      className="ml-4 text-gray-400 hover:text-saffron-600 transition-colors p-2 hover:bg-saffron-50 rounded-lg"
      aria-label={`Copy ${field}`}
      title="Copy to clipboard"
    >
      {copiedField === field ? (
        <FiCheck className="w-6 h-6 text-green-500" />
      ) : (
        <FiCopy className="w-6 h-6" />
      )}
    </button>
  )

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="heading-primary text-saffron-700 mb-4">
              Donation Option Through Cheque/Online Fund Transfer
            </h1>
            <h2 className="heading-secondary text-saffron-600">
              Kindly Contribute Voluntarily to Shri Shirdi Sai Seva Trust
            </h2>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Bank Details Section */}
            <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl shadow-lg p-8 space-y-6">
              <div className="flex items-center justify-center mb-6">
                <HiBanknotes className="w-16 h-16 text-saffron-600" />
              </div>

              <p className="text-center text-gray-700 text-lg mb-8">
                <strong>Fund Transfer / NEFT / RTGS / IMPS / Quick Pay</strong>
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2 font-medium">Account Name</p>
                      <p className="font-semibold text-gray-900 text-lg">{bankDetails.accountName}</p>
                    </div>
                    <CopyButton text={bankDetails.accountName} field="accountName" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2 font-medium">Account Number</p>
                      <p className="font-semibold text-gray-900 font-mono text-lg">{bankDetails.accountNumber}</p>
                    </div>
                    <CopyButton text={bankDetails.accountNumber} field="accountNumber" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2 font-medium">IFSC Code</p>
                      <p className="font-semibold text-gray-900 font-mono text-lg">{bankDetails.ifscCode}</p>
                    </div>
                    <CopyButton text={bankDetails.ifscCode} field="ifscCode" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2 font-medium">Bank & Branch</p>
                      <p className="font-semibold text-gray-900 text-lg">{bankDetails.bank}</p>
                    </div>
                    <CopyButton text={bankDetails.bank} field="bank" />
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-start space-x-3">
                <HiCheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-body font-semibold text-green-800 mb-2">
                    Tax Benefits Available
                  </p>
                  <p className="text-body text-green-700">
                    We have got <strong>80G and 12A certificate</strong> from IncomeTax Department. IT Exemption is available. We will provide Receipts for the contributions received.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="heading-secondary text-saffron-700">
                Why Contribute?
              </h3>
              <ul className="space-y-3 text-body">
                <li className="flex items-start space-x-3">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>Support the construction and maintenance of the beautiful Shri Shirdi Sai Baba Temple</span>
                </li>
                <li className="flex items-start space-x-3">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>Help in the installation of Lord Dattatreya Swamy Marble Idol and 54ft Hanuman Statue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>Contribute to building the Community Hall for devotees&apos; use</span>
                </li>
                <li className="flex items-start space-x-3">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>Support daily Aarti, Darshan, and special pujas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>Help maintain the temple premises with 40+ Neem trees and various plants</span>
                </li>
                <li className="flex items-start space-x-3">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>All contributions go directly to the temple trust</span>
                </li>
              </ul>
            </div>

            {/* Sai Baba Quote */}
            <div className="bg-saffron-100 rounded-lg p-6 border-l-4 border-saffron-600">
              <p className="text-body italic mb-2">
                <strong>Sai Baba&apos;s words:</strong>
              </p>
              <p className="text-body font-semibold mb-2">
                &quot;maine apane bhakton se jo kuchh bhi sweekaar karata hoon. Main use Sau guna zyaada vaapas karana padata hai&quot;
              </p>
              <p className="text-body">
                <strong>Translation:</strong> &quot;Whatever I accept from my devotees. I have to pay them back a hundred times over&quot;
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4 pt-6 border-t border-gray-200">
              <p className="text-body text-gray-700">
                We request all the devotees to come forward and contribute in any form. All the contributions will go to the temple trust itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact-us" className="btn-primary">
                  Contact Us
                </a>
                <a href="/about-us" className="btn-secondary">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
