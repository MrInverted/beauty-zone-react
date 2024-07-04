import React from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Portfolio } from './Portfolio';
import { CardReviews } from './CardReviews';
import { showCardRequest } from '../../redux/card-slice';



function CardMain() {
  const dispatch = useAppDispatch();
  const info = useAppSelector(store => store.card);

  const [isPhoneShowed, setIsPhoneShowed] = React.useState(false);

  const onLeaveARequestClick = () => dispatch(showCardRequest())

  return (<>
    <div className="card__row">
      <div className="card__left">
        <img src={info.image} alt="" />
      </div>

      <div className="card__right">
        <div className="masters__name">
          <h3>{info.name}</h3>
          <div className="masters__rating">
            <img src="/images/masters-rating-star-filled.svg" alt="" />
            <span>{info.rating}</span>
          </div>
        </div>

        <div className="masters__price">${info.price}</div>

        <div className="masters__info">
          <img src="/images/masters-time.svg" alt="" />
          <span>{info.workingDays}: {info.workingHours}</span>
        </div>

        <div className="masters__info">
          <img src="/images/masters-location.svg" alt="" />
          <span>{info.state}, {info.city}</span>
        </div>

        <div className="card__show-contacts active">
          <img src="/images/card-show-phone.svg" alt="" />
          {isPhoneShowed ? <a href="#">{info.phone}</a> : <span onClick={() => setIsPhoneShowed(true)}>Показать контакты</span>}
        </div>

        <button className="btn-dark" onClick={onLeaveARequestClick}>Записаться</button>
      </div>
    </div>

    <div className="card__labels">
      <div className="card__top">Топ</div>
      <div className="card__category">{info.service}</div>
    </div>

    <p className="card__text">{info.description}</p>

    <div className="card__services">
      <h4>Услуги</h4>
      <ul>
        <li>
          <span>Свадебные прически</span>
          <span>от $100</span>
        </li>

        <li>
          <span>Прически на длинные волосы</span>
          <span>от $50</span>
        </li>

        <li>
          <span>Стрижка на длинные волосы</span>
          <span>от $40</span>
        </li>

        <li>
          <span>Тонирование волос</span>
          <span>от $40</span>
        </li>
      </ul>
    </div>

    <div className="card__portfolio">
      <h4>Портфолио</h4>
      <div className="card__slider">
        <Portfolio items={info.portfolio} />
      </div>
    </div>

    <CardReviews />

  </>)
}

export { CardMain }