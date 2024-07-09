import React from 'react'
import { Order } from './Order'

function CabinetOrders() {
  const [isOpened, setIsOpened] = React.useState(false)

  const onTitleClick = () => setIsOpened(!isOpened)

  return (
    <div className="cabinet__right cabinet-orders">
      <div className="cabinet__overview for-top-masters">
        <div className="cabinet__overview-item">
          <span>Просмотры:</span>
          <span>1 167</span>
        </div>
        <div className="cabinet__overview-item">
          <span>Заявки:</span>
          <span>574</span>
        </div>
      </div>

      <Order />
    </div>
  )
}

export { CabinetOrders }