import React from 'react'
import { Article } from './Article'
import { AddAnArticle } from './AddAnArticle'
import { useAppSelector } from '../../../redux/store'
import { ArticleFromDb } from './ArticleFromDb';

function CabinetArticles() {
  const { isArticleForm } = useAppSelector(store => store.addArticle);
  const { articles } = useAppSelector(store => store.account);

  return (
    <div className="cabinet__right cabinet-articles">
      {articles.length === 0 && <p>Нажмите на кнопку “Добавить объявление”, чтобы создать свое первое объявление.</p>}

      {articles.map(el => <ArticleFromDb key={el._id} {...el} />)}

      {isArticleForm && <Article />}

      <AddAnArticle />
    </div>
  )
}

export { CabinetArticles }