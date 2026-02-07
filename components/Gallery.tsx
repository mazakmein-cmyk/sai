'use client'

import ImageCarousel from './ImageCarousel'

export default function Gallery() {
  // Temple images for carousel - using actual images from Downloads
  const carouselImages = [
    {
      id: 1,
      src: '/images/IMG20260101132437.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 1',
      title: 'Temple View 1',
    },
    {
      id: 2,
      src: '/images/IMG20260101132442.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 2',
      title: 'Temple View 2',
    },
    {
      id: 3,
      src: '/images/IMG20260101132452.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 3',
      title: 'Temple View 3',
    },
    {
      id: 4,
      src: '/images/IMG20260101132503.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 4',
      title: 'Temple View 4',
    },
    {
      id: 5,
      src: '/images/IMG20260101132511.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 5',
      title: 'Temple View 5',
    },
    {
      id: 6,
      src: '/images/IMG20260101132524.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 6',
      title: 'Temple View 6',
    },
    {
      id: 7,
      src: '/images/IMG20260101132636.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 7',
      title: 'Temple View 7',
    },
    {
      id: 8,
      src: '/images/IMG20260101132704.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 8',
      title: 'Temple View 8',
    },
    {
      id: 9,
      src: '/images/IMG20260101140557.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 9',
      title: 'Temple View 9',
    },
    {
      id: 10,
      src: '/images/IMG20260101140601.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 10',
      title: 'Temple View 10',
    },
    {
      id: 11,
      src: '/images/IMG20260101140618.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 11',
      title: 'Temple View 11',
    },
    {
      id: 12,
      src: '/images/IMG20260101140625.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 12',
      title: 'Temple View 12',
    },
    {
      id: 13,
      src: '/images/IMG20260101140643.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 13',
      title: 'Temple View 13',
    },
    {
      id: 14,
      src: '/images/IMG20260101140653.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 14',
      title: 'Temple View 14',
    },
    {
      id: 15,
      src: '/images/IMG20260101140705.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 15',
      title: 'Temple View 15',
    },
    {
      id: 16,
      src: '/images/IMG20260101140716.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 16',
      title: 'Temple View 16',
    },
    {
      id: 17,
      src: '/images/IMG20260101140723.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 17',
      title: 'Temple View 17',
    },
    {
      id: 18,
      src: '/images/IMG20260101140730.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 18',
      title: 'Temple View 18',
    },
    {
      id: 19,
      src: '/images/IMG20260101140736.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 19',
      title: 'Temple View 19',
    },
    {
      id: 20,
      src: '/images/IMG20260101140741.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 20',
      title: 'Temple View 20',
    },
    {
      id: 21,
      src: '/images/IMG20260101140753.jpg',
      alt: 'Shri Shirdi Sai Baba Temple - Image 21',
      title: 'Temple View 21',
    },
  ]

  // Grid gallery images (for below carousel)
  const gridImages = [
    {
      id: 1,
      title: 'Entrance to the Temple premises',
      src: '/images/temple-entrance.jpg',
      alt: 'Temple Entrance',
    },
    {
      id: 2,
      title: 'Temple Garden',
      src: '/images/temple-garden.jpg',
      alt: 'Temple Garden',
    },
    {
      id: 3,
      title: 'Natural Surroundings',
      src: '/images/temple-nature.jpg',
      alt: 'Natural Surroundings',
    },
  ]

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-8">
          Shri Shirdi Sai Baba Temple in Pictures
        </h2>
        
        {/* Image Carousel */}
        <div className="mb-12">
          <ImageCarousel images={carouselImages} autoPlay={true} interval={4000} />
        </div>
        
        {/* Grid Gallery (Optional - can be removed if not needed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {gridImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-full h-full bg-gradient-to-br from-saffron-100 to-saffron-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600 text-sm">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-center">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
