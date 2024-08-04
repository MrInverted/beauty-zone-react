import React from 'react'
import { Article } from './Article'
import { AddAnArticle } from './AddAnArticle'
import { useAppSelector } from '../../../redux/store'

function CabinetArticles() {
  const { isArticleForm } = useAppSelector(store => store.addArticle);
  const { } = useAppSelector(store => store.account)

  return (
    <div className="cabinet__right cabinet-articles">
      <p>Нажмите на кнопку “Добавить объявление”, чтобы создать свое первое объявление.</p>

      {isArticleForm && <Article />}

      <AddAnArticle />
    </div>
  )
}

export { CabinetArticles }