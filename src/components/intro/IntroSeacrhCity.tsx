import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingCity } from '../../redux/sorting-slice';
import { allCities } from '../../data/location';

interface IIntroSearchCity {
  setValue?: (inc: string) => void;
  value?: () => string;
}

function IntroSearchCity({ value, setValue }: IIntroSearchCity) {
  const dispatch = useAppDispatch();
  const { state, city } = useAppSelector(store => store.sorting);
  const [isOpened, setIsOpened] = React.useState(false);

  const onCityChange = (inc: string) => {
    if (value) {
      setValue && setValue(inc);
    } else {
      dispatch(setSortingCity(inc));
    }
  }

  return (
    <div className="intro__search-block" onClick={() => setIsOpened(!isOpened)}>
      {value ? <span>{value() || "Выберите город"}</span> : <span>{city || "Выберите город"}</span>}
      <img className={isOpened ? "active" : ""} src="/images/intro-polygon-down.svg" alt="" />
      <div className={`intro__search-dropdown ${isOpened ? "active" : ""}`}>
        <div className="min-height-0">
          <span onClick={() => onCityChange("")}>Все города</span>
          {allCities.filter(el => el.state === state).map((el, index) => (
            <span
              key={index}
              onClick={() => onCityChange(el.russian)}
            >
              {el.russian}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export { IntroSearchCity }