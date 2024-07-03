import React from 'react'
import "./masters.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { masterCardPreviewBoth } from '../../utils/catalogue'
import { MastersCardPreview } from './MastersCardPreview'



export default function () {
  return (
    <section className="masters">
      <div className="container">
        <div className="masters__content">
          <h2><span>Топ</span> мастера</h2>
          <div className="masters__grid">
            {masterCardPreviewBoth.slice(0, 8).map((el, index) => <MastersCardPreview key={index} {...el} />)}
          </div>

          <div className="masters__slider">
            <Swiper
              loop={true}
              slidesPerView={1.4}
              spaceBetween={20}
              loopPreventsSliding={false}
              centeredSlides={true}
              modules={[Pagination]}
              pagination={{ enabled: true }}
            >
              {masterCardPreviewBoth.slice(0, 8).map((el, index) => (
                <SwiperSlide key={index}>
                  <MastersCardPreview {...el} />
                </SwiperSlide>))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
