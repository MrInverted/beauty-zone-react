import React from 'react'
import "./masters.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { masterCardPreviewBoth } from '../../data/catalogue'
import { MastersCardPreview } from './MastersCardPreview'
import { useAppDispatch } from '../../redux/store';
import { showCardModal } from '../../redux/card-slice';



export default function () {
  const dispatch = useAppDispatch()

  const onSlideCardClick = () => dispatch(showCardModal())

  return (
    <section className="masters">
      <div className="container">
        <div className="masters__content">
          <h2><span>Топ</span> мастера</h2>
          <div className="masters__grid">
            {masterCardPreviewBoth.slice(0, 8).map((el, index) => <MastersCardPreview key={index} {...el} onClick={onSlideCardClick} />)}
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
                <SwiperSlide key={index} onClick={onSlideCardClick}>
                  <MastersCardPreview {...el} />
                </SwiperSlide>))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
