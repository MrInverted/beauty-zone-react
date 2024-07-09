import React from 'react'
import "./catalogue.scss"

import { CatalogueSorting } from './CatalogueSorting';
import { CatalogueMastersGrid } from './CatalogueMastersGrid';
import { CatalogueMobileNav } from './CatalogueMobileNav';



export default function () {
  const [isMobileFiltersOpened, setIsMobileFiltersOpened] = React.useState(false);

  const onShowFiltersClick = () => {
    setIsMobileFiltersOpened(true);
    document.body.style.overflow = "hidden";
  }

  const onCloseFiltersClick = () => {
    setIsMobileFiltersOpened(false);
    document.body.style.overflow = "";
  }

  return (
    <section className="catalogue">
      <div className="container">
        <div className="catalogue__content">
          <h2>Каталог мастеров</h2>
          <CatalogueMobileNav {...{ onShowFiltersClick }} />

          <div className="catalogue__grid">
            <CatalogueSorting {...{ isMobileFiltersOpened, onCloseFiltersClick }} />
            <CatalogueMastersGrid />
          </div>
        </div>
      </div>
    </section>
  )
}
