import React from 'react'
import axios from 'axios';
import "./masters.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { MastersCardPreview } from './MastersCardPreview'
import { useAppDispatch } from '../../redux/store';
import { setCardData, showCardModal } from '../../redux/card-slice';
import { IArticleModel } from '../../data/models';
import { BACKEND_URL } from '../../data/url';



export default function () {
  const dispatch = useAppDispatch();
  const [articles, setArticles] = React.useState<IArticleModel[]>([]);

  const onSlideCardClick = (inc: any) => {
    dispatch(showCardModal())
    dispatch(setCardData(inc))
  };

  React.useEffect(() => {
    axios.get(`${BACKEND_URL}/api/article/premium`)
      .then(success => setArticles(success.data.articles))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="masters">
      <div className="container">
        <div className="masters__content">
          <h2><span>Топ</span> мастера</h2>
          <div className="masters__grid">
            {articles.slice(0, 8).map((el, index) => <MastersCardPreview key={index} {...el} onClick={onSlideCardClick.bind(null, el)} />)}
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
              {articles.slice(0, 8).map((el, index) => (
                <SwiperSlide key={index} >
                  <MastersCardPreview {...el} onClick={onSlideCardClick.bind(null, el)} />
                </SwiperSlide>))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
