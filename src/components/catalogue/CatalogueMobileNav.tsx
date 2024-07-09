import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingBy } from '../../redux/sorting-slice';

interface ICatalogueMobileNav {
  onShowFiltersClick: () => void;
}



function CatalogueMobileNav({ onShowFiltersClick }: ICatalogueMobileNav) {
  const dispatch = useAppDispatch()
  const { sort } = useAppSelector(store => store.sorting)
  const [isMobileSortOpened, setIsMobileSortOpened] = React.useState(false);

  const sortItems = ["По популярности", "По рейтингу", "По цене"];

  const onSortCardsClick = () => setIsMobileSortOpened(!isMobileSortOpened);
  const onSortByClick = (inc: string) => dispatch(setSortingBy(inc));

  return (
    <div className="catalogue__mobile-nav">
      <button className="btn-dark" onClick={onShowFiltersClick}>
        <img src="/images/catalogue-filters.svg" alt="" />
        <span>Фильтры</span>
      </button>

      <button
        onClick={onSortCardsClick}
        className={`btn-light catalogue__mobile-sort ${isMobileSortOpened ? 'active' : ''}`}
      >
        <span>{sort}</span>
        <img src="/images/catologue-chevron-up.svg" alt="" />
        <div className="catalogue__dropdown">
          <div className="min-height-0">
            {sortItems.map(el => (
              <span key={el} onClick={onSortByClick.bind(null, el)}>
                {el}
              </span>
            ))}
          </div>
        </div>
      </button>
    </div>
  )
}

export { CatalogueMobileNav }