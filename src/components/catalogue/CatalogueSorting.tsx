import React from 'react'

import { CatalogueSortingItem } from './CatalogueSortingItem';
import { defaultServices } from '../../utils/catalogue';

interface ICatalogueSorting {
  isMobileFiltersOpened: boolean;
  onCloseFiltersClick: () => void;
}



function CatalogueSorting({ isMobileFiltersOpened, onCloseFiltersClick }: ICatalogueSorting) {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [checkboxex, setCheckboxes] = React.useState(defaultServices);

  return (
    <div className={`catalogue__sorting ${isMobileFiltersOpened ? 'active' : ''}`}>
      <div className="h-fit">
        <div className="row">
          <span>Фильтры</span>
          <img src="/images/close-button.svg" alt="" onClick={onCloseFiltersClick} />
        </div>

        <CatalogueSortingItem type='input' title='Штат' placeholder='Все штаты' value={state} setValue={setState} />
        <CatalogueSortingItem type='input' title='Город' placeholder='Все города' value={city} setValue={setCity} />
        <CatalogueSortingItem type='chexboxes' title='Услуга' chexboxes={checkboxex} setValue={setCheckboxes} />
        <CatalogueSortingItem type='radio' title='Цена' />

        <button className="btn-light">Применить</button>
      </div>
    </div>
  )
}

export { CatalogueSorting }