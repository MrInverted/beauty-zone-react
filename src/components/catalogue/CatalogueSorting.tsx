import React from 'react'

import { CatalogueSortingItem } from './CatalogueSortingItem';
import { allServices } from '../../data/catalogue';

interface ICatalogueSorting {
  isMobileFiltersOpened: boolean;
  onCloseFiltersClick: () => void;
}



function CatalogueSorting({ isMobileFiltersOpened, onCloseFiltersClick }: ICatalogueSorting) {

  const onApplySortingClick = () => {
    // ...axios
  }

  return (
    <div className={`catalogue__sorting ${isMobileFiltersOpened ? 'active' : ''}`}>
      <div className="h-fit">
        <div className="row">
          <span>Фильтры</span>
          <img src="/images/close-button.svg" alt="" onClick={onCloseFiltersClick} />
        </div>

        <CatalogueSortingItem type='input' title='Штат' stateOrCity='state' />
        <CatalogueSortingItem type='input' title='Город' stateOrCity='city' />
        <CatalogueSortingItem type='chexboxes' title='Услуга' chexboxes={allServices} />
        <CatalogueSortingItem type='radio' title='Цена' />

        <button className="btn-light" onClick={onApplySortingClick}>Применить</button>
      </div>
    </div>
  )
}

export { CatalogueSorting }