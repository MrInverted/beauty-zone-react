import React from 'react'

interface ICategoriesCard {
  imageUrl: string;
  title: string;
}

function CategoriesCard({ imageUrl, title }: ICategoriesCard) {
  return (
    <article className="categories__slide">
      <div className="categories__image">
        <img src={imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
    </article>
  )
}

export { CategoriesCard }