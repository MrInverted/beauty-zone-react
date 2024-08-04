import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setCardData, showCardModal } from '../../redux/card-slice';
import { fetchArticlesLimitedForIntroPage, fetchArticlesWithSorting } from '../../redux/sorting-slice-fetching';

import { MastersCardPreview } from '../masters/MastersCardPreview';
import { CataloguePagination } from './CataloguePagination';
import { CatalogueDesktopSortBy } from './CatalogueDesktopSortBy';



function CatalogueMastersGrid() {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector(store => store.articles)
  const { pathname } = useLocation()
  const isIntroPage = (pathname === "/");

  const onMastersCardClick = (inc: any) => {
    dispatch(showCardModal());
    dispatch(setCardData(inc));
  }

  React.useEffect(() => {
    isIntroPage ? dispatch(fetchArticlesLimitedForIntroPage()) : dispatch(fetchArticlesWithSorting());
  }, [])

  if (articles.length === 0) return (
    <div className="empty-message">
      По вашему запросу ничего не найдено.
      <br />
      Попробуйте изменить фильтры и повторите попытку.
    </div >
  )

  return (
    <div className="catalogue__masters-grid">
      <CatalogueDesktopSortBy />

      {articles.map((el, index) => <MastersCardPreview key={index} {...el} onClick={onMastersCardClick.bind(null, el)} />)}

      <CataloguePagination />
    </div>
  )
}

export { CatalogueMastersGrid }