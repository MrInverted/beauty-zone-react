import React from 'react'

interface ICatalogueMobileNav {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  onShowFiltersClick: () => void;
}

function CatalogueMobileNav({ sort, setSort, onShowFiltersClick }: ICatalogueMobileNav) {
  const [isMobileSortOpened, setIsMobileSortOpened] = React.useState(false);
  const sortItems = ["По популярности", "По рейтингу", "По цене"];

  const onSortCardsClick = () => {
    setIsMobileSortOpened(!isMobileSortOpened);
  }

  return (
    <div className="catalogue__mobile-nav">
      <button className="btn-dark" onClick={onShowFiltersClick}>
        <img src="/images/catalogue-filters.svg" alt="" />
        <span>Фильтры</span>
      </button>

      <button className={`btn-light catalogue__mobile-sort ${isMobileSortOpened ? 'active' : ''}`} onClick={onSortCardsClick}>
        <span>{sort}</span>
        <img src="/images/catologue-chevron-up.svg" alt="" />
        <div className="catalogue__dropdown">
          <div className="min-height-0">
            {sortItems.map(el => (
              <span onClick={() => setSort(el)}>
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