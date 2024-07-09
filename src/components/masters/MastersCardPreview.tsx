import React from 'react'

import { MasterCardPreviewType } from '../../data/catalogue'
type Props = MasterCardPreviewType & { onClick: () => void }



function MastersCardPreview(props: Props) {
  return (
    <article className={props.isPremium ? 'masters__item masters__premium' : 'masters__item'} onClick={props.onClick}>
      <div className="masters__category">
        {props.service}
      </div>

      <div className="masters__image">
        <img src={props.image} alt="" />
      </div>

      <div className="masters__main">
        <div className="masters__name">
          <h3>{props.name}</h3>

          {props.isPremium && <>
            <div className="masters__rating">
              <img src="/images/masters-rating-star-filled.svg" alt="" />
              <span>{props.rating}</span>
            </div>
          </>}
        </div>

        <div className="masters__price">${props.price}</div>

        <p className="masters__text">{props.description}</p>

        <div className="masters__info">
          <img src="/images/masters-time.svg" alt="" />
          <span>{props.workingDays}: {props.workingHours}</span>
        </div>

        <div className="masters__info">
          <img src="/images/masters-location.svg" alt="" />
          <span>{props.state}, {props.city}</span>
        </div>

        {props.isPremium && <div className="masters__label">Топ</div>}
      </div>
    </article>
  )
}

export { MastersCardPreview }