'use client'

import ImageCarousel from './ImageCarousel'

export default function Gallery() {
  // Temple images for carousel - using actual images from Downloads
  const carouselImages = [
    {
      id: 1,
      src: '/images/1.jpeg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 2,
      src: '/images/6.jpeg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 3,
      src: '/images/8.jpeg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 4,
      src: '/images/9.jpeg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 5,
      src: '/images/IMG20260101132437.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 6,
      src: '/images/IMG20260101132442.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 7,
      src: '/images/IMG20260101132452.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 8,
      src: '/images/IMG20260101132503.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 9,
      src: '/images/IMG20260101132511.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 10,
      src: '/images/IMG20260101132524.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 11,
      src: '/images/IMG20260101132636.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 12,
      src: '/images/IMG20260101132704.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 13,
      src: '/images/IMG20260101140557.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 14,
      src: '/images/IMG20260101140601.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 15,
      src: '/images/IMG20260101140618.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 16,
      src: '/images/IMG20260101140625.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 17,
      src: '/images/IMG20260101140643.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 18,
      src: '/images/IMG20260101140653.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 19,
      src: '/images/IMG20260101140705.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 20,
      src: '/images/IMG20260101140716.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 21,
      src: '/images/IMG20260101140723.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 22,
      src: '/images/IMG20260101140730.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 23,
      src: '/images/IMG20260101140736.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 24,
      src: '/images/IMG20260101140741.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
    },
    {
      id: 25,
      src: '/images/IMG20260101140753.jpg',
      alt: 'Shri Shirdi Sai Baba Temple',
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
          <ImageCarousel
            images={carouselImages}
            autoPlay={true}
            interval={4000}
            tabs={[
              { label: '🙏 Divine Sanctum', targetIndex: 0 },
              { label: '🏛️ Sacred Grounds', targetIndex: 4 },
            ]}
          />
        </div>


      </div>
    </section>
  )
}
