import React from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { showCardMakeReview } from '../../redux/card-slice'
import { BACKEND_URL } from '../../data/url';

function CardReviews() {
  const dispatch = useAppDispatch();
  const { comments } = useAppSelector(store => store.card);

  const onLeaveAReviewClick = () => dispatch(showCardMakeReview())

  return (
    <div className="reviews">
      <div className="reviews__heading">
        <h4>Отзывы</h4>
        <button className="btn-light" onClick={onLeaveAReviewClick}>Оставить отзыв</button>
      </div>

      {comments.length === 0 && <span>Комментариев нету, Вы можете оставить первый комментарий</span>}

      {comments.map((el, index) => (
        <article className="reviews__item" key={index}>
          <div className="reviews__title">
            <h5>{el?.name}</h5>
            <span className="reviews__date">{new Date(el?.createdAt).toLocaleString()}</span>
          </div>

          <div className="reviews__rating">
            {new Array(5).fill("").map((_, index) => <img key={index} src={`/images/masters-rating-star-${el.rating > index ? "filled" : "empty"}.svg`} alt="" />)}
          </div>
          <p className="reviews__text">{el?.text}</p>
          <div className="reviews__photos">
            <div className="reviews__image">
              <img src={`${BACKEND_URL}${el.imageUrl}`} alt="" data-fancybox="review-1" data-src={`${BACKEND_URL}${el.imageUrl}`} />
            </div>
          </div>
        </article>
      ))}

    </div>
  )
}

export { CardReviews }