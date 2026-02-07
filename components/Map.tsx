export default function Map() {
  return (
    <section id="map" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-8">
          Find Us
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.25982721681834!2d77.6447664381509!3d12.838196179772005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bbde1870873%3A0xf281a907395bfa0e!2sSri%20Sathya%20Sai%20Seva%20Samiti%20Electronic%20City!5e0!3m2!1sen!2sin!4v1770358418280!5m2!1sen!2sin"
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
            <p className="text-gray-600">
              <strong>Location:</strong> Shri Shirdi Sai Baba Temple, Kallahally, Hoskote, Bengaluru Rural- 562114
            </p>
            <a
              href="https://maps.google.com/?q=Kallahally,+Hoskote,+Bengaluru+Rural,+Karnataka+562114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-saffron-600 hover:text-saffron-700 font-medium transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
