import React from 'react'
import { CatalogueSortingItem } from './CatalogueSortingItem';


const defaultServices = [
  { service: "Ногтевой сервис", value: "", checked: false },
  { service: "Парихмахерские услуги", value: "", checked: false },
  { service: "Косметология", value: "", checked: false },
  { service: "Окрашивание волос", value: "", checked: false },
  { service: "Шугаринг / Восковая эпиляция", value: "", checked: false },
  { service: "Визаж", value: "", checked: false },
  { service: "Массаж", value: "", checked: false },
  { service: "Наращивание волос", value: "", checked: false },
  { service: "Наращивание ресниц", value: "", checked: false },
  { service: "Фотографии / Фотограф", value: "", checked: false },
  { service: "Мастер бровист", value: "", checked: false },
  { service: "Перманентный макияж", value: "", checked: false },
  { service: "Тату-мастер", value: "", checked: false },
  { service: "Фитнес / Тренера", value: "", checked: false },
  { service: "Йога-мастер", value: "", checked: false },
  { service: "Электроэпиляция", value: "", checked: false },
  { service: "Мануальная терапия", value: "", checked: false },
  { service: "Психология", value: "", checked: false },
  { service: "Похудение / Диетология", value: "", checked: false },
  { service: "Обучение для мастеров", value: "", checked: false },
  { service: "Преподаватели / репетиторы", value: "", checked: false }
];

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