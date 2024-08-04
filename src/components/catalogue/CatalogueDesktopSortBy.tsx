import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSortingBy, setSortingPage } from '../../redux/sorting-slice';
import { fetchArticlesWithSorting } from '../../redux/sorting-slice-fetching';
import { setCurrentPage } from '../../redux/article-slice';

function CatalogueDesktopSortBy() {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector(store => store.sorting);
  const [isDecktopSortOpen, setIsDecktopSortOpen] = React.useState(false);

  const { pathname } = useLocation();
  const isIntroPage = (pathname === "/");

  const sortItems = ["По популярности", "По рейтингу", "По цене"];

  const onSortByClick = (inc: string) => {
    dispatch(setSortingBy(inc));
    dispatch(setSortingPage(0));
    dispatch(setCurrentPage(1));
    dispatch(fetchArticlesWithSorting());
  }

  const onSortCardsClick = () => setIsDecktopSortOpen(!isDecktopSortOpen);

  return (
    <>
      {!isIntroPage && <>
        <div className={isDecktopSortOpen ? 'catalogue__desktop-sort active' : 'catalogue__desktop-sort'} onClick={onSortCardsClick}>
          <span>Сортировать:</span>
          <div>
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
          </div>
        </div>
      </>}
    </>
  )
}

export { CatalogueDesktopSortBy }