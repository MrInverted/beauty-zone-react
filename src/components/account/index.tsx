import React from 'react'
import "./account.scss"
import { CabinetOrders } from './orders/CabinetOrders'
import { CabinetArticles } from './articles/CabinetArticles'
import { CabinetPersonal } from './personal/CabinetPersonal'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setArticles, setRequests } from '../../redux/account-slice'
import { BACKEND_URL } from '../../data/url'



export default function () {
  const dispatch = useAppDispatch();
  const { ownerId } = useAppSelector(store => store.auth)
  const [block, setBlock] = React.useState(0);

  const cabinetLeftItems = ['Заявки', 'Объявления', 'Личные данные'];

  React.useEffect(() => {
    axios.get(`${BACKEND_URL}/api/account/request/${ownerId}`)
      .then(success => dispatch(setRequests(success.data.requests)))
      .catch(err => console.log(err.response?.data))

    axios.get(`${BACKEND_URL}/api/account/article/${ownerId}`)
      .then(success => dispatch(setArticles(success.data.articles)))
      .catch(err => console.log(err.response?.data))
  }, [])

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
