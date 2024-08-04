import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingBy, setSortingPage } from '../../redux/sorting-slice';
import { useLocation } from 'react-router-dom';
import { fetchArticlesWithSorting } from '../../redux/sorting-slice-fetching';
import { setCurrentPage } from '../../redux/article-slice';

interface ICatalogueMobileNav {
  onShowFiltersClick: () => void;
}



function CatalogueMobileNav({ onShowFiltersClick }: ICatalogueMobileNav) {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector(store => store.sorting);
  const { pathname } = useLocation()
  const [isMobileSortOpened, setIsMobileSortOpened] = React.useState(false);

  const isIntroPage = (pathname === "/");
  const sortItems = ["По популярности", "По рейтингу", "По цене"];

  const onSortCardsClick = () => setIsMobileSortOpened(!isMobileSortOpened);

  const onSortByClick = (inc: string) => {
    dispatch(setSortingBy(inc));
    dispatch(setSortingPage(0));
    dispatch(setCurrentPage(1));
    dispatch(fetchArticlesWithSorting());
  }

  return (
    <div className="catalogue__mobile-nav">
      <button className="btn-dark" onClick={onShowFiltersClick}>
        <img src="/images/catalogue-filters.svg" alt="" />
        <span>Фильтры</span>
      </button>

      {!isIntroPage && <>
        <button
          onClick={onSortCardsClick}
          className={`btn-light catalogue__mobile-sort ${isMobileSortOpened ? 'active' : ''}`}
        >
          <span>{sort || "По умолчанию"}</span>
          <img src="/images/catologue-chevron-up.svg" alt="" />
          <div className="catalogue__dropdown">
            <div className="min-height-0">
              {sortItems.map(el => (
                <span key={el} onClick={onSortByClick.bind(null, el)}>
                  {el}
                </span>
              ))}
              <span onClick={onSortByClick.bind(null, "")}>Без сортировки</span>
            </div>
          </div>
        </button>
      </>}
    </div>
  )
}

export { CatalogueMobileNav }