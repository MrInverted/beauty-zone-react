import React from 'react'
import 'swiper/css';
import "swiper/css/grid"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface IProtfolio {
  items: string[]
}



function Portfolio({ items }: IProtfolio) {
  return (
    <Swiper
      loop={true}
      slidesPerView={2}
      spaceBetween={10}
      loopPreventsSliding={false}
      modules={[Navigation]}
      navigation={{
        prevEl: ".card .swiper-button-prev",
        nextEl: ".card .swiper-button-next"
      }}
      breakpoints={{
        100: { slidesPerView: 2, },
        700: { slidesPerView: 3, },
        800: { slidesPerView: 4, }
      }}
    >
      {items.map((el, index) => (
        <SwiperSlide key={index}>
          <div className="card__slide">
            <img src={el} alt="" data-fancybox="portfolio" data-src={el} />
          </div>
        </SwiperSlide>))}

      <div className="swiper-button-prev swiper-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
          <path d="M8.5 1L1 8.5L8.5 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="swiper-button-next swiper-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
          <path d="M1 1L8.5 8.5L1 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Swiper>
  )
}

export { Portfolio }