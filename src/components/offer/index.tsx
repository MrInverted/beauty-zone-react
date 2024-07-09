import React from 'react'
import "./offer.scss"
import { Link } from 'react-router-dom'

interface IOffer {
  page: "index" | "master"
}


export default function index({ page }: IOffer) {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__content">
          {page === "index" && <h2>Хочешь разместить объявление?</h2>}
          {page === "master" && <h2 className="w-440">Стань востребованным мастером с <span>BeautyZone</span></h2>}

          <p>Выбери тариф и получи первый месяц размещения <span>Бесплатно!</span></p>
          <div className="offer__row">
            <Link to="/account" className="btn-dark">Добавить объявление</Link>
            {page === "index" && <Link to="/master">Подробнее</Link>}
          </div>
        </div>
      </div>
    </section>
  )
}
