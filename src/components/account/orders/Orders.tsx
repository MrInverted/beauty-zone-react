import React from 'react'
import { SingleOrder } from './SingleOrder'
import { useAppSelector } from '../../../redux/store'



function Orders() {
  const { requests } = useAppSelector(store => store.account);
  const [isOpened, setIsOpened] = React.useState(false)

  const onTitleClick = () => setIsOpened(!isOpened)

  return (
    <div className={isOpened ? 'cabinet__service for-top-masters active' : 'cabinet__service for-top-masters'} >
      <div className="cabinet__title flex-row align-center" onClick={onTitleClick}>
        <h2>Парихмахерские услуги</h2>
        <img src="/images/account-chevron-down.svg" alt="" />
      </div>

      <div className="min-height-0">
        <div className="cabinet__day upper">
          {requests.map((el, index) => <SingleOrder {...el} key={index} />)}
        </div>

      </div>
    </div >
  )
}

export { Orders }