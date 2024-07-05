import React from 'react';
import "./intro.scss";

import { IntroForm } from './IntroForm';
interface IIntro {
  page: "intro" | "master"
}



export default function ({ page }: IIntro) {

  return (
    <section className="intro bg-flowers">
      <div className="container">
        <div className="intro__content">
          {page === "intro" && <>
            <h1>Найди своего <span>Beauty</span> мастера поблизости</h1>
            <p>Каталог специалистов в твоем городе</p>
            <IntroForm />
          </>}

          {page === "master" && <>
            <h1><span>Beauty</span> Мастер?</h1>
            <p>Получи новых и постоянных клиентов, добавив свою услугу в каталог специалистов</p>
            <a href="#" className="btn-dark w-fit">Добавить объявление</a>
          </>}
        </div>
      </div>
    </section>
  )
}



