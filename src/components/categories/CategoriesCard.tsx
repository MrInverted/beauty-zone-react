import React from 'react'

interface ICategoriesCard {
  imageUrl: string;
  russian: string;
}



function CategoriesCard({ imageUrl, russian }: ICategoriesCard) {
  return (
    <article className="categories__slide">
      <div className="categories__image">
        <img src={imageUrl} alt={russian} />
      </div>
      <h3>{russian}</h3>
    </article>
  )
}

export { CategoriesCard }