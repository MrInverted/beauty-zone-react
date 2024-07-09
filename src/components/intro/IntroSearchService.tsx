import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingServiceSingle, setSortingState } from '../../redux/sorting-slice';
import { allServices } from '../../data/catalogue';

function IntroSearchService() {
  const dispatch = useAppDispatch();
  const { service } = useAppSelector(store => store.sorting);
  const [isOpened, setIsOpened] = React.useState(false);

  const onServiceChange = (inc: string) => dispatch(setSortingServiceSingle(inc));

  const serviceTitle = service.at(0) || "Какая услуга интересует";

  return (
    <div className="intro__search-block span-2" onClick={() => setIsOpened(!isOpened)}>
      <span>{serviceTitle}</span>
      <img className={isOpened ? "active" : ""} src="/images/intro-polygon-down.svg" alt="" />
      <div className={`intro__search-dropdown ${isOpened ? "active" : ""}`}>
        <div className="min-height-0">
          {allServices.map((el, index) => (
            <span
              key={index}
              onClick={() => onServiceChange(el.russian)}
            >
              {el.russian}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export { IntroSearchService }