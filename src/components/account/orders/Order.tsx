import React from 'react'

function Order() {
  const [isOpened, setIsOpened] = React.useState(false)

  const onTitleClick = () => setIsOpened(!isOpened)

  return (
    <div className={isOpened ? 'cabinet__service for-top-masters active' : 'cabinet__service for-top-masters'}>
      <div className="cabinet__title flex-row align-center" onClick={onTitleClick}>
        <h2>Парихмахерские услуги</h2>
        <img src="/images/account-chevron-down.svg" alt="" />
      </div>

      <div className="min-height-0">
        <div className="cabinet__day upper">
          <div className="row flex-row">
            <span>25 октября 2023</span>
            <span>Обработано</span>
          </div>

          <div className="cabinet__time active">
            <span>11:34 pm</span>
            <span>Имя Фамилия</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" />
          </div>

          <div className="cabinet__time active">
            <span>11:34 pm</span>
            <span>Имя Фамилия</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия клиента</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" checked />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия клиента</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" checked />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия клиента</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" checked />
          </div>
        </div>

        <div className="cabinet__day">
          <div className="row flex-row">
            <span>24 октября 2023</span>
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия клиента</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" checked />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия клиента</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" checked />
          </div>
        </div>

        <div className="cabinet__day">
          <div className="row flex-row">
            <span>23 октября 2023</span>
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия клиента</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" checked />
          </div>

          <div className="cabinet__time">
            <span>11:34 pm</span>
            <span>Имя Фамилия клиента</span>
            <span>+111 222 33 44</span>
            <input type="checkbox" checked />
          </div>
        </div>

      </div>
    </div>
  )
}

export { Order }