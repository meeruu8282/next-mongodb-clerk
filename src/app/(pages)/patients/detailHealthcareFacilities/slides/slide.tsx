
'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { images } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import the CSS module
import styles from './slide.module.css'
import { Navigation, Pagination } from 'swiper/modules'

const Slide = () => {
  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          className={`${styles.customSlider} bg-black h-96 w-full rounded-lg`} // Utilize CSS module for custom styling
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Slide
