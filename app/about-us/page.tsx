import { HiCheckCircle } from 'react-icons/hi'
import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us - Shri Shirdi Sai Baba Temple | Shri Shirdi Sai Seva Trust',
  description: 'Learn about Shri Shirdi Sai Seva Trust, temple construction, worship services, and our mission. Located in Kallahalli Village, Hoskote, Bengaluru Rural.',
}

export default function AboutUsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="heading-primary text-saffron-700 mb-4">
              Welcome to Shri Shirdi Sai Baba Temple
            </h1>
            <h2 className="heading-secondary text-saffron-600">About Us</h2>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-body">
                <strong>Shri Shirdi Sai Baba Temple construction and Lord Shri Hanuman Statue installation at Kallahalli Village, Hoskote Taluk, Bengaluru Rural, Karnataka.</strong>
              </p>
              
              <p className="text-body">
                We would like to introduce ourselves, My name is <strong>Sridhara Swamy</strong> - Founder of Shri Shirdi Sai Seva Trust. We are Shri Shirdi Sai Baba devotees and Bhajan Singers since childhood days. We are purely from an Artist&apos;s and devotional background. We are located in <strong>Kallahalli Village, Hoskote Taluk, Bengaluru Rural, Karnataka.</strong>
              </p>
              
              <p className="text-body">
                At present with Baba&apos;s grace we have built a Small temple and our intention is to make a big and beautiful Temple and we have a plan to bring <strong>Lord Dattatreya Swamy Marble Idol</strong>. For future, we do have plans to Install <strong>54ft Hanuman Statue</strong>.
              </p>
            </div>

            {/* Temple Premises Plants */}
            <div className="bg-saffron-50 rounded-lg p-6">
              <h3 className="heading-secondary text-saffron-700 mb-4">
                Our Baba Temple Premises
              </h3>
              <p className="text-body mb-4">
                <strong>Our Baba Temple premises consist of trees and plants as mentioned below:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Arka Plants (Auspicious to Lord Ganesh)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Around 40 Neem trees</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">50 Tulsi plants (Krishna and Rama plants)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Audambara Vruksha (Dattatreya Swamy)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Various types of Hibiscus Flower Plants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Brahma Pushpa Flower Plants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Sapota Plants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Mango trees</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Guava Plants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Pomegranate</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Amla</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Paneer fruit tree</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Water Apple tree</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Mahogany plants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Bilwa Patra Plants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Nagalinga Pushpa Plants</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Rudrakshi Plants</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-body">
                  <strong>Water Management:</strong> To maintain all the plants and trees, we have 2 water sumps, 6 water motors are used. One water sump storage capacity is (24×24ft and 11ft depth) = 30 water tanks (5000 ltr each). Totally <strong>130,000 Litre Capacity</strong>.
                </p>
              </div>
            </div>

            {/* Worship Services */}
            <div>
              <h3 className="heading-secondary text-saffron-700 mb-4">
                Worship Services
              </h3>
              <p className="text-body mb-4">
                <strong>We offer daily Aarti and Darshan services to our devotees. Our temple also conducts special pujas and ceremonies on auspicious occasions like:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Shivaratri</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Sri Ramanavami and Sai Baba Birthday</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Sri Guru Poornima</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Sri Sai Satya Narayana Pooja</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Sri Krishna Janmashtami Festival</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Sri Sai Baba Samadhi day</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Navratri</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">During Karthika Masa, We light Lamps on Deepawali Festival</span>
                </div>
              </div>
            </div>

            {/* Temple Goals */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="heading-secondary text-saffron-700 mb-4">
                Temple Goals
              </h3>
              <ul className="space-y-3 text-body">
                <li className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>Once in a month we would like to do <strong>Satsang</strong></span>
                </li>
                <li className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>Once in a week <strong>Bhajan Seva</strong> to Baba.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span>We would like to <strong>distribute Prasadam</strong> to all the devotees.</span>
                </li>
              </ul>
            </div>

            {/* Neem Trees Section */}
            <div className="border-l-4 border-saffron-600 pl-6 py-4 bg-saffron-50 rounded-r-lg">
              <p className="text-body">
                <strong>Shri Shirdi Sai Baba always meditated under Neem tree.</strong>
              </p>
              <p className="text-body mt-2">
                In our temple premises, the devotees can see around <strong>30-40 Neem trees</strong>. Honestly we are telling devotees that Baba has given this idea to build a temple. The devotees are lucky to contribute to Sai Seva and all the contributions will be used for temple construction.
              </p>
            </div>

            {/* Community Hall */}
            <div>
              <h3 className="heading-secondary text-saffron-700 mb-4">
                Community Hall
              </h3>
              <p className="text-body">
                Along with this, to all the devotees donating liberally, definitely we will have a <strong>Satsang, Community hall</strong>. This will be made for devotees utilization for:
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Cultural Musical Concerts/Programs</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Bhajan Seva</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Upanayana</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Birthday</span>
                </div>
                <div className="flex items-start space-x-2">
                  <HiCheckCircle className="w-5 h-5 text-saffron-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Marriage</span>
                </div>
              </div>
              <p className="text-body mt-4">
                We request all the devotees to come forward and contribute in any form. All the contributions will go to the temple trust itself.
              </p>
            </div>

            {/* Certificates */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-body">
                <strong>We have received 80G and 12A Certificates from IT Department, IT Exemption is available.</strong> We will provide Receipts for the contributions received. We want everyone to feel Happy and Positive vibes at our temple premises and do service happily to Baba. Everyone can visit temple on <strong>Thursdays</strong> and also attend all the special programs conducted at the temple.
              </p>
            </div>

            {/* Program Information */}
            <div>
              <p className="text-body">
                We will share program information via <strong><a href={SITE_CONFIG.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-saffron-600 hover:text-saffron-700 underline">WhatsApp</a></strong> to all the devotees and also in the website.
              </p>
              <p className="text-body mt-4">
                In the gallery, we have shared our initial days of temple premises photos and the present temple view for your reference. Our Temple Location, Photos, Videos and Trust Bank Account details are available for your reference.
              </p>
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

            {/* Final Message */}
            <div className="space-y-4">
              <p className="text-body">
                We request all the devotees to consider this as a wonderful opportunity and support us. Our intention is to construct beautiful temple for our devotees happiness and satisfaction. Here all the devotees can do their Seva as volunteers. This temple will be open all the time. Shri Shirdi Sai Seva Trust is created only to bring pure devotion. Our devotees involvement is very important.
              </p>
              
              <p className="text-body">
                For more information, please contact us.
              </p>
              
              <p className="text-2xl font-bold text-saffron-600 text-center mt-8">
                Om Sai Ram.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-gray-200">
              <a href="/donation" className="btn-primary text-center">
                Contribute Now
              </a>
              <a href="/contact-us" className="btn-secondary text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
