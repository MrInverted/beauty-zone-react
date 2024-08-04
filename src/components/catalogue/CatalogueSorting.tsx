import { CatalogueSortingItem } from './CatalogueSortingItem';
import { allServices } from '../../data/catalogue';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchArticlesWithSorting } from '../../redux/sorting-slice-fetching';
import { setSortingPage } from '../../redux/sorting-slice';
import { setCurrentPage } from '../../redux/article-slice';

interface ICatalogueSorting {
  isMobileFiltersOpened: boolean;
  onCloseFiltersClick: () => void;
}



function CatalogueSorting({ isMobileFiltersOpened, onCloseFiltersClick }: ICatalogueSorting) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isIntroPage = (pathname === "/");

  const onApplySortingClick = () => {
    if (isIntroPage) navigate("/catalogue");

    dispatch(setSortingPage(0));
    dispatch(setCurrentPage(1));
    dispatch(fetchArticlesWithSorting());
  }

  return (
    <div className={`catalogue__sorting ${isMobileFiltersOpened ? 'active' : ''}`}>
      <div className="h-fit">
        <div className="row">
          <span>Фильтры</span>
          <img src="/images/close-button.svg" alt="" onClick={onCloseFiltersClick} />
        </div>

        <CatalogueSortingItem type='input' title='Штат' stateOrCity='state' />
        <CatalogueSortingItem type='input' title='Город' stateOrCity='city' />
        <CatalogueSortingItem type='chexboxes' title='Услуга' chexboxes={allServices} />
        <CatalogueSortingItem type='radio' title='Цена' />

        <button className="btn-light" onClick={onApplySortingClick}>Применить</button>
      </div>
    </div>
  )
}

export { CatalogueSorting }