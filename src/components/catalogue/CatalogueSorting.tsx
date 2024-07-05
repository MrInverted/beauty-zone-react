import React from 'react'

import { CatalogueSortingItem } from './CatalogueSortingItem';
import { allServices } from '../../utils/catalogue';
import { allCities, allStates } from '../../utils/location';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingCity, setSortingService, setSortingState } from '../../redux/sorting-slice';

interface ICatalogueSorting {
  isMobileFiltersOpened: boolean;
  onCloseFiltersClick: () => void;
}



function CatalogueSorting({ isMobileFiltersOpened, onCloseFiltersClick }: ICatalogueSorting) {
  const dispatch = useAppDispatch();
  const { state, city, } = useAppSelector(store => store.sorting);

  const onStateChange = (inc: string) => dispatch(setSortingState(inc));
  const onCityChange = (inc: string) => dispatch(setSortingCity(inc));

  return (
    <div className={`catalogue__sorting ${isMobileFiltersOpened ? 'active' : ''}`}>
      <div className="h-fit">
        <div className="row">
          <span>Фильтры</span>
          <img src="/images/close-button.svg" alt="" onClick={onCloseFiltersClick} />
        </div>

        <CatalogueSortingItem type='input' title='Штат' value={state} setValue={onStateChange} list={allStates} />
        <CatalogueSortingItem type='input' title='Город' value={city} setValue={onCityChange} list={allCities.filter(el => el.state === state)} />
        <CatalogueSortingItem type='chexboxes' title='Услуга' chexboxes={allServices} />
        <CatalogueSortingItem type='radio' title='Цена' />

        <button className="btn-light">Применить</button>
      </div>
    </div>
  )
}

export { CatalogueSorting }