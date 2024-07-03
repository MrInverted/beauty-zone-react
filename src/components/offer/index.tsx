import React from 'react'
import "./offer.scss"



export default function index() {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__content">
          <h2>Хочешь разместить объявление?</h2>
          <p>Выбери тариф и получи первый месяц размещения <span>Бесплатно!</span></p>
          <div className="offer__row">
            <a href="#" className="btn-dark login-trigger">Добавить объявление</a>
            <a href="./master.html">Подробнее</a>
          </div>
        </div>
      </div>
    </section>
  )
}
