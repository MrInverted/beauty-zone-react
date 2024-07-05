import React from 'react'

import { allStates, allCities } from '../../utils/location';
import { allServices } from '../../utils/catalogue';
import { IntroSearchBlock } from './IntroSearchBlock';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingCity, setSortingServiceSingle, setSortingState } from '../../redux/sorting-slice';



function IntroForm() {
  const { state, city, service } = useAppSelector(store => store.sorting)
  const dispatch = useAppDispatch()

  const onStateChange = (inc: string) => dispatch(setSortingState(inc));
  const onCityChange = (inc: string) => dispatch(setSortingCity(inc));
  const onServiceChange = (inc: string) => dispatch(setSortingServiceSingle(inc));

  const serviceTitle = service.at(0) || "Какая услуга интересует";

  return (
    <form className="intro__search" action="/" method="get">

      <IntroSearchBlock title={state} setTitle={onStateChange} list={allStates} />
      <IntroSearchBlock title={city} setTitle={onCityChange} list={allCities.filter(el => el.state === state)} />
      <IntroSearchBlock title={serviceTitle} setTitle={onServiceChange} list={allServices} span2={true} />

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