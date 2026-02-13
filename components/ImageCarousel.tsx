'use client'

import { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'

interface CarouselImage {
  id: number
  src: string
  alt: string
  title?: string
}

interface CarouselTab {
  label: string
  targetIndex: number
}

interface ImageCarouselProps {
  images: CarouselImage[]
  autoPlay?: boolean
  interval?: number
  tabs?: CarouselTab[]
}

export default function ImageCarousel({ images, autoPlay = true, interval = 4000, tabs }: ImageCarouselProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!autoPlay || isHovered) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovered, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleImageError = (imageId: number) => {
    setImageErrors((prev) => new Set(prev).add(imageId))
  }

  if (images.length === 0) return null

  const handleTabClick = (tabIndex: number, targetIndex: number) => {
    setActiveTab(tabIndex)
    setCurrentIndex(targetIndex)
  }

  return (
    <div
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Tabs */}
      {tabs && tabs.length > 0 && (
        <div className="flex justify-center mb-4 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index, tab.targetIndex)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === index
                  ? 'bg-saffron-600 text-white shadow-lg shadow-saffron-600/30 scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-saffron-400 hover:text-saffron-600 hover:shadow-md'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-900" style={{ aspectRatio: '16/9' }}>
        {/* Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={image.id} className="min-w-full h-full relative">
              {imageErrors.has(image.id) ? (
                // Fallback for missing images
                <div className="w-full h-full bg-gradient-to-br from-saffron-100 via-saffron-50 to-saffron-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-saffron-200 rounded-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-saffron-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">{image.title || image.alt}</p>
                    <p className="text-gray-500 text-sm mt-2">Image will appear here</p>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    onError={() => handleImageError(image.id)}
                  />
                  {image.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white text-lg font-semibold">{image.title}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="mt-4 text-center text-gray-600 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
