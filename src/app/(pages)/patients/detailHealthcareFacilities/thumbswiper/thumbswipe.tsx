'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, FreeMode, Navigation, Thumbs } from 'swiper/modules'

import { images } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/navigation';


// Importera CSS-filen

export default function Thumbswipers() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {
    // Ändra färgen på --swiper-theme-color när komponenten monteras
    document.documentElement.style.setProperty('--swiper-theme-color', '#45AC60'); // Använd var(--sage) för att referera till färgen "sage"
  

    
    // Rensa upp eventuellt när komponenten avmonteras
    return () => {
      // Återställ till standardfärgen eller gör andra rengöringsåtgärder om det behövs
    };
  }, []);

  return (
    <section className='h-[600px] w-[800px] py-12'>
      <div className='container '>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs, A11y]}
          className='h-96 w-full rounded-lg'
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

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex  h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block rounded-[30px] h-full w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
