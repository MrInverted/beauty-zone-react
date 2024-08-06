import React from 'react'
import { BACKEND_URL } from '../../../data/url';

type FileType = File | null | undefined;

interface IPortfolio {
  isEditing: boolean;
  portfolio: (FileType | string)[];
  onAddPortfolioImageClick: () => void;
  onPortfolioImageDelete: (index: number) => void;
}

function Portfolio({ isEditing, portfolio, onAddPortfolioImageClick, onPortfolioImageDelete }: IPortfolio) {
  return (
    <label>
      <span>Портфолио</span>
      <div className="cart-images-grid">

        {isEditing && <>
          <div className="add-image" onClick={onAddPortfolioImageClick}>
            <span>+ Добавить</span>
          </div>
        </>}

        {portfolio.map((item, index) => {
          const url = (item instanceof File) ? URL.createObjectURL(item) :
            (typeof item === "string") ? `${BACKEND_URL}${item}` : "";

          return <div className="image" key={index}>
            <img src={url} alt="" />
            {isEditing && <>
              <div className="close" onClick={onPortfolioImageDelete.bind(null, index)}>
                <span>×</span>
              </div>
            </>}
          </div>
        }
        )}

        {portfolio.length === 0 && isEditing === false && <div className="add-image" />}

      </div>
    </label>
  )
}

export { Portfolio }