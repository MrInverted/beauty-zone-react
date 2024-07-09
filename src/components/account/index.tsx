import React from 'react'
import "./account.scss"
import { CabinetOrders } from './orders/CabinetOrders'
import { CabinetArticles } from './articles/CabinetArticles'
import { CabinetPersonal } from './personal/CabinetPersonal'



export default function () {
  const [block, setBlock] = React.useState(0);

  const cabinetLeftItems = ['Заявки', 'Объявления', 'Личные данные'];

  return (
    <section className="cabinet">
      <div className="container">
        <div className="cabinet__content">
          <div className="cabinet__grid">
            <nav className="cabinet__left">
              <h1>Личный кабинет</h1>
              <ul>
                {cabinetLeftItems.map((el, index) => (
                  <li
                    className={block === index ? 'active' : ''}
                    onClick={() => setBlock(index)}
                    key={index}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </nav>

            {block === 0 && <CabinetOrders />}
            {block === 1 && <CabinetArticles />}
            {block === 2 && <CabinetPersonal />}

          </div>
        </div>
      </div>
    </section >
  )
}
