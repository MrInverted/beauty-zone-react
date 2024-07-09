import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingState } from '../../redux/sorting-slice';
import { allStates } from '../../data/location';

function IntroSearchState() {
  const dispatch = useAppDispatch();
  const { state } = useAppSelector(store => store.sorting);
  const [isOpened, setIsOpened] = React.useState(false);

  const onStateChange = (inc: string) => dispatch(setSortingState(inc));

  return (
    <div className="intro__search-block" onClick={() => setIsOpened(!isOpened)}>
      <span>{state}</span>
      <img className={isOpened ? "active" : ""} src="/images/intro-polygon-down.svg" alt="" />
      <div className={`intro__search-dropdown ${isOpened ? "active" : ""}`}>
        <div className="min-height-0">
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