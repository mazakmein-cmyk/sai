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
