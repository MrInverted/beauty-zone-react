import React from 'react';
import "./card.scss";

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { closeCardModal } from '../../redux/card-slice';

import { CardMain } from './CardMain';
import { CardRequest } from './CardRequest';
import { CardMakeReview } from './CardMakeReview';



export default function () {
  const dispatch = useAppDispatch();
  const { isPremium, isMakeReview, isRequest } = useAppSelector(store => store.card);

  const onCloseCard: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    dispatch(closeCardModal());
  }

  return (<>
    <article className={isPremium ? "card card__premium" : "card"} onClick={onCloseCard} >
      <div className="card__content">

        <CardMain />

        {isRequest && <CardRequest />}

        {isMakeReview && <CardMakeReview />}

        <div className="modal__close" onClick={() => dispatch(closeCardModal())}>
          <img src="/images/modal-close.svg" alt="" />
        </div>
      </div>
    </article >
  </>)
}
