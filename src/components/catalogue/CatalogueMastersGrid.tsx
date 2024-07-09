import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { showCardModal } from '../../redux/card-slice';
import { masterCardPreviewBoth } from '../../data/catalogue';
import { MastersCardPreview } from '../masters/MastersCardPreview';
import { setSortingBy } from '../../redux/sorting-slice';
import { Link } from 'react-router-dom';



function CatalogueMastersGrid() {
  const dispatch = useAppDispatch()
  const { sort } = useAppSelector(store => store.sorting)
  const [isDecktopSortOpen, setIsDecktopSortOpen] = React.useState(false);

  const sortItems = ["По популярности", "По рейтингу", "По цене"];

  const onSortCardsClick = () => setIsDecktopSortOpen(!isDecktopSortOpen);
  const onSortByClick = (inc: string) => dispatch(setSortingBy(inc));
  const onMastersCardClick = () => dispatch(showCardModal());

  return (
    <div className="catalogue__masters-grid">

      <div className={isDecktopSortOpen ? 'catalogue__desktop-sort active' : 'catalogue__desktop-sort'} onClick={onSortCardsClick}>
        <span>Сортировать:</span>
        <div>
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
        </div>
      </div>

      {masterCardPreviewBoth.map((el, index) => <MastersCardPreview key={index} {...el} onClick={onMastersCardClick} />)}

      <div className="catalogue__buttons">
        <div className="catalogue__pagination">
          <a href="#" className="catalogue__pagination-prev catalogue__pagination-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
              <path d="M8.5 1L1 8.5L8.5 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <Link to="/catalogue" className="active">1</Link>
          <Link to="/catalogue">2</Link>
          <Link to="/catalogue">3</Link>
          <Link to="/catalogue">4</Link>
          <Link to="/catalogue">5</Link>

          <a href="./catalogue.html" className="catalogue__pagination-next catalogue__pagination-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
              <path d="M1 1L8.5 8.5L1 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}

export { CatalogueMastersGrid }