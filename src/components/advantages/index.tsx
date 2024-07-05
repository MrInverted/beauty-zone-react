import React from 'react'
import "./advantages.scss";

export default function () {
  const advantages = [
    {
      title: "Экономь на рекламе услуг",
      text: "Реклама твоих услуг теперь наша забота. Экономь от $700 в месяц и повышай эффективность своей работы вместе с нами.",
      imageUrl: "/images/master-page-advantages-1.svg"
    },
    {
      title: "Собери клиентскую базу",
      text: "С возможностью выхода в ТОП ты быстро станешь востребованным мастером и наработаешь имидж.",
      imageUrl: "/images/master-page-advantages-2.svg"
    },
    {
      title: "Забудь о телефонных звонках",
      text: "Все заявки приходят в личный кабинет и на электронную почту. Сосредоточься на работе, а не на организации.",
      imageUrl: "/images/master-page-advantages-3.svg"
    },
  ]

  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__content">
          <div className="advantages__row">
            {advantages.map((item, index) => (
              <article key={index}>
                <img src={item.imageUrl} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}
