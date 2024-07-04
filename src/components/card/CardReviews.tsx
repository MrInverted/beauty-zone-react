import React from 'react'
import { useAppDispatch } from '../../redux/store'
import { showCardMakeReview } from '../../redux/card-slice'

function CardReviews() {
  const dispatch = useAppDispatch()

  const onLeaveAReviewClick = () => dispatch(showCardMakeReview())

  return (
    <div className="reviews">
      <div className="reviews__heading">
        <h4>Отзывы</h4>
        <button className="btn-light" onClick={onLeaveAReviewClick}>Оставить отзыв</button>
      </div>

      <article className="reviews__item">
        <div className="reviews__title">
          <h5>Александра Егорова</h5>
          <span className="reviews__date">28/04/23</span>
        </div>

        <div className="reviews__rating">
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-empty.svg" alt="" />
        </div>
        <p className="reviews__text">Искреннее обожаю прически от Марии. Всегда идеальное попадание и стойкость на весь день. Спасибо огромное, ценю Вас ❤️</p>
        <div className="reviews__photos">
          <div className="reviews__image">
            <img src="./images/card/1.jpg" alt="" data-fancybox="review-1" data-src="./images/card/1.jpg" />
          </div>
          <div className="reviews__image">
            <img src="./images/card/2.jpg" alt="" data-fancybox="review-1" data-src="./images/card/2.jpg" />
          </div>
        </div>
      </article>

      <article className="reviews__item">
        <div className="reviews__title">
          <h5>Александра Егорова</h5>
          <span className="reviews__date">28/04/23</span>
        </div>
        <div className="reviews__rating">
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-filled.svg" alt="" />
          <img src="/images/masters-rating-star-empty.svg" alt="" />
        </div>
        <p className="reviews__text">Искреннее обожаю прически от Марии. Всегда идеальное попадание и стойкость на весь день. Спасибо огромное, ценю Вас ❤️</p>
      </article>
    </div>
  )
}

export { CardReviews }