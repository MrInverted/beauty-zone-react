import React from 'react';

import { masterCardPreviewBoth } from '../../utils/catalogue';
import { MastersCardPreview } from '../masters/MastersCardPreview';

interface ICatalogueMastersGrid {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}



function CatalogueMastersGrid({ sort, setSort }: ICatalogueMastersGrid) {
  const [isDecktopSortOpen, setIsDecktopSortOpen] = React.useState(false);
  const sortItems = ["По популярности", "По рейтингу", "По цене"];

  const onSortCardsClick = () => {
    setIsDecktopSortOpen(!isDecktopSortOpen)
  }

  return (
    <div className="catalogue__masters-grid">

      <div className={`catalogue__desktop-sort ${isDecktopSortOpen ? 'active' : ''}`} onClick={onSortCardsClick}>
        <span>Сортировать:</span>
        <div>
          <span>{sort}</span>
          <img src="/images/catologue-chevron-up.svg" alt="" />
          <div className="catalogue__dropdown">
            <div className="min-height-0">
              {sortItems.map(el => (
                <span key={el} onClick={() => setSort(el)}>
                  {el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {masterCardPreviewBoth.map((el, index) => <MastersCardPreview key={index} {...el} />)}

      <div className="catalogue__buttons">
        <a href="./catalogue.html" className="btn-light">Показать еще</a>
        <div className="catalogue__pagination">
          <a href="./catalogue.html" className="active">1</a>
          <a href="./catalogue.html">2</a>
          <a href="./catalogue.html">3</a>
          <a href="./catalogue.html">4</a>
          <a href="./catalogue.html">5</a>
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