import React from 'react'

interface IPortfolio {
  isEditing: boolean;
  portfolio: string[];
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

        {portfolio.map((item, index) => (
          <div className="image">
            <img src={item} alt="" />
            {isEditing && <>
              <div className="close" onClick={onPortfolioImageDelete.bind(null, index)}>
                <span>×</span>
              </div>
            </>}
          </div>
        ))}

        {portfolio.length === 0 && isEditing === false && <div className="add-image" />}

      </div>
    </label>
  )
}

export { Portfolio }