import React from 'react'
import "./plans.scss";

export default function () {
  const base = [
    { isActive: true, text: "Размещение объявления в одной из категорий", },
    { isActive: false, text: "Вывод в ТОП на 7 дней" },
    { isActive: false, text: "Запись клиентов через форму обратной связи" },
    { isActive: false, text: "Возможность получать отзывы и формировать рейтинг" },
  ];

  const standart = [
    { isActive: true, text: "Размещение объявления в одной из категорий", },
    { isActive: true, text: "Вывод в ТОП на 7 дней" },
    { isActive: false, text: "Запись клиентов через форму обратной связи" },
    { isActive: false, text: "Возможность получать отзывы и формировать рейтинг" },
  ];

  const platinum = [
    { isActive: true, text: "Размещение объявления в одной из категорий", },
    { isActive: false, text: "Вывод в ТОП на 7 дней" },
    { isActive: false, text: "Запись клиентов через форму обратной связи" },
    { isActive: false, text: "Возможность получать отзывы и формировать рейтинг" },
  ];


  return (
    <section className="masters-plans">
      <div className="container">
        <div className="masters-plans__content">
          <h2>Тарифы</h2>
          <div className="masters-plans__grid">
            <article>
              <h3>Базовый</h3>
              <div className="masters-plans__text">
                <ul>
                  {base.map((item, index) => (
                    <li key={index} className={item.isActive ? "" : "disabled"}>
                      <img src={`/images/list-${item.isActive ? 'check' : 'cross'}.svg`} alt="" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="masters-plans__price">
                  <span>$70/месяц</span>
                  <button className="btn-light registration-trigger">Выбрать тариф</button>
                </div>
              </div>
            </article>

            <article>
              <h3>Стандарт</h3>
              <div className="masters-plans__text">
                <ul>
                  {standart.map((item, index) => (
                    <li key={index} className={item.isActive ? "" : "disabled"}>
                      <img src={`/images/list-${item.isActive ? 'check' : 'cross'}.svg`} alt="" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="masters-plans__price">
                  <span>$85/месяц</span>
                  <button className="btn-light registration-trigger">Выбрать тариф</button>
                </div>
              </div>
            </article>

            <article>
              <h3>Платинум</h3>
              <div className="masters-plans__text">
                <ul>
                  {platinum.map((item, index) => (
                    <li key={index} className={item.isActive ? "" : "disabled"}>
                      <img src={`/images/list-${item.isActive ? 'check' : 'cross'}.svg`} alt="" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="masters-plans__price">
                  <span>$100/месяц</span>
                  <button className="btn-light registration-trigger">Выбрать тариф</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
