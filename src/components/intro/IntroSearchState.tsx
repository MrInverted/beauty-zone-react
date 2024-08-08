import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingState } from '../../redux/sorting-slice';
import { allStates } from '../../data/location';

interface IIntroSearchState {
  setValue?: (inc: string) => void;
  value?: () => string;
}

function IntroSearchState({ value, setValue }: IIntroSearchState) {
  const dispatch = useAppDispatch();
  const { state } = useAppSelector(store => store.sorting);
  const [isOpened, setIsOpened] = React.useState(false);

  const onStateChange = (inc: string) => {
    setValue && setValue(inc);
    dispatch(setSortingState(inc));
  }

  return (
    <div className="intro__search-block" onClick={() => setIsOpened(!isOpened)}>
      {value ? <span>{value() || "Выберите штат"}</span> : <span>{state || "Выберите штат"}</span>}
      <img className={isOpened ? "active" : ""} src="/images/intro-polygon-down.svg" alt="" />
      <div className={`intro__search-dropdown ${isOpened ? "active" : ""}`}>
        <div className="min-height-0">
          <span onClick={() => onStateChange("")}>Все штаты</span>
          {allStates.map((el, index) => (
            <span
              key={index}
              onClick={() => onStateChange(el.russian)}
            >
              {el.russian}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export { IntroSearchState }