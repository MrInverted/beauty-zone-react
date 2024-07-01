import React from 'react'
import "./about.scss"

export default function () {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__row">
            <h2><span>BeautyZone</span> - сервис, который помогает мастеру и клиенту найти друг друга</h2>
            <p>Наша платформа не только упрощает процесс поиска и выбора бьюти-мастеров, но и гарантирует его прозрачность, и надежность. База данных сервиса состоит только из проверенных и высококвалифицированных специалистов. Каждый мастер, перед размещением своего объявления, проходит процесс регистрации. Платформа имеет удобные инструменты для поиска и фильтрации мастеров с учетом удалённости от клиентов, ценового диапазона и других критериев.</p>
          </div>
          <div className="about__offer">
            <div className="about__figures">
              <dl>
                <dt>152+</dt>
                <dd>проверенных <br /> мастера</dd>
              </dl>
              <dl>
                <dt>1260+</dt>
                <dd>довольных <br /> клиента</dd>
              </dl>
              <dl>
                <dt>48+</dt>
                <dd>штатов <br /> для поиска</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
