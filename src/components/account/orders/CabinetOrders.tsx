import React from 'react'
import { Orders } from './Orders'
import { useAppSelector } from '../../../redux/store';


function CabinetOrders() {
  const { requests, articles } = useAppSelector(store => store.account);

  const views = articles.reduce((accum, item) => accum + item.viewsCount, 0)

  return (
    <div className="cabinet__right cabinet-orders">
      <div className="cabinet__overview for-top-masters">
        <div className="cabinet__overview-item">
          <span>Просмотры:</span>
          <span>{views}</span>
        </div>
        <div className="cabinet__overview-item">
          <span>Заявки:</span>
          <span>{requests.length}</span>
        </div>
      </div>

      <Orders />
    </div>
  )
}

export { CabinetOrders }