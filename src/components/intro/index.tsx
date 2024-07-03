import React from 'react';
import "./intro.scss";

import { IntroForm } from './IntroForm';



export default function () {

  return (
    <section className="intro bg-flowers">
      <div className="container">
        <div className="intro__content">
          <h1>Найди своего <span>Beauty</span> мастера поблизости</h1>
          <p>Каталог специалистов в твоем городе</p>

          <IntroForm />

        </div>
      </div>
    </section>
  )
}



