import React from 'react'
import { useNavigate } from 'react-router-dom';

import { IntroSearchState } from './IntroSearchState';
import { IntroSearchCity } from './IntroSeacrhCity';
import { IntroSearchService } from './IntroSearchService';
import { useAppDispatch } from '../../redux/store';
import { fetchArticlesWithSorting } from '../../redux/sorting-slice-fetching';
import { setCurrentPage } from '../../redux/article-slice';
import { setSortingPage } from '../../redux/sorting-slice';



function IntroForm() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const onSearchButtonClick = () => {
    dispatch(fetchArticlesWithSorting());
    dispatch(setSortingPage(0));
    dispatch(setCurrentPage(1));
    nav("/catalogue");
  }

  return (
    <form className="intro__search" action="/" method="get">
      <IntroSearchState />
      <IntroSearchCity />
      <IntroSearchService />

      <div className="intro__search-button">
        <button className="btn-dark" type="button" onClick={onSearchButtonClick}>
          <img src="/images/intro-button-search.svg" alt="" />
          <span>Поиск</span>
        </button>
      </div>
    </form>
  )
}

export { IntroForm }