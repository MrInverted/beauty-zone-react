import React from 'react'

import "./categories.scss"
import 'swiper/css';
import "swiper/css/grid"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import { CategoriesCard } from './CategoriesCard';
import { allServices } from '../../utils/location';


/**
 * 
 * get /api/categories
 * post /api/categories
 * delete /api/categories/:id
 * patch /api/categories/:id
 * 
 */


export default function () {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__content">
          <h2>Категории услуг</h2>
          <div className="categories__slider">
            <Swiper
              slidesPerView={5}
              loopPreventsSliding={false}
              modules={[Navigation, Grid]}
              navigation={{
                prevEl: ".categories .swiper-button-prev",
                nextEl: ".categories .swiper-button-next"
              }}
              grid={{
                rows: 2,
                fill: 'row'
              }}
              breakpoints={{
                100: { slidesPerView: 2 },
                700: { slidesPerView: 3, },
                800: { slidesPerView: 4, },
                900: { slidesPerView: 5 }
              }}
            >
              {allServices.map(el => (
                <SwiperSlide key={JSON.stringify(el)}>
                  <CategoriesCard {...el} />
                </SwiperSlide>))}

              <div className="swiper-button-prev swiper-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                  <path d="M8.5 1L1 8.5L8.5 16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="swiper-button-next swiper-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                  <path d="M1 1L8.5 8.5L1 16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
