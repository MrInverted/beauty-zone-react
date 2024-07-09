import React from 'react'

import { IntroSearchState } from './IntroSearchState';
import { IntroSearchCity } from './IntroSeacrhCity';
import { IntroSearchService } from './IntroSearchService';



function IntroForm() {

  const onSearchButtonClick = () => {
    // ...axios
  }

  return (
    <form className="intro__search" action="/" method="get">
      <IntroSearchState />
      <IntroSearchCity />
      <IntroSearchService />

      <div className="intro__search-button">
        <button className="btn-dark" type="button" onClick={onSearchButtonClick}>
          <img src="/images/intro-button-search.svg" alt="" />
          <span>Поиск</span>
        </button>
      </div>
    </form>
  )
}

export { IntroForm }