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


      </div>
    </section>
  )
}
