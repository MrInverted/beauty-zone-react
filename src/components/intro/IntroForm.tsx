import React from 'react'

import { allStates, allCities, allServices } from '../../utils/location';
import { IntroSearchBlock } from './IntroSearchBlock';

const defaultState = { abbreviation: "NY", english: "Select state", russian: "Выберите штат" };
const defaultCity = { state: "", english: "Select city", russian: "Выберите город" };
const defaultService = { russian: "Какая услуга интересует?", english: "", imageUrl: "" };



function IntroForm() {
  const [state, setState] = React.useState(defaultState);
  const [city, setCity] = React.useState(defaultCity);
  const [service, setService] = React.useState(defaultService);

  return (
    <form className="intro__search" action="/" method="get">

      <IntroSearchBlock title={state.russian} setTitle={setState} list={allStates} />
      <IntroSearchBlock title={city.russian} setTitle={setCity} list={allCities.filter(el => el.state === state.abbreviation)} />
      <IntroSearchBlock title={service.russian} setTitle={setService} list={allServices} span2={true} />

      <div className="intro__search-button">
        <button className="btn-dark" type="button">
          <img src="/images/intro-button-search.svg" alt="" />
          <span>Поиск</span>
        </button>
      </div>
    </form>
  )
}

export { IntroForm }