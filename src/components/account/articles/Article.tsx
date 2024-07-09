import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useArticleForm } from '../../../hooks/useArticleForm';
import { Portfolio } from './Portfolio';
import { MainImage } from './MainImage';
import { Fields } from './Fields';
import { Buttons } from '../Buttons';
import { Error } from "../Error"



function Article() {
  const dispatch = useAppDispatch();
  const { service } = useAppSelector(store => store.addArticle)

  const [isEditing, setIsEditing] = React.useState(false);
  const [isOpened, setIsOpened] = React.useState(false);

  const {
    onFormSubmit,
    handleSubmit,
    register,
    setValue,
    isError,

    inputPortfolioFileRef,
    portfolioFile,
    portfolio,

    inputMainFileRef,
    mainFile,
    mainFileUrl,

    onAddPortfolioImageClick,
    onAddMainImageClick,
    onPortfolioImageDelete,
    onMainImageDelete
  } = useArticleForm({ setIsEditing })

  const onTitleClick = () => setIsOpened(!isOpened);
  const onEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => { e.preventDefault(); setIsEditing(true); }
  const onCancelClick = () => setIsEditing(false);
  const onDeleteClick = () => { }



  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className='article-shadow'>
      <div className={isOpened ? "folded opened" : "folded"}>
        <div className="row flex-row" onClick={onTitleClick}>
          <span>{service}</span>
          <img src="/images/account-chevron-down.svg" alt="" />
        </div>

        <div className="min-height-0">
          <div className="cabinet__article">
            <div className="cabinet__title">
              <h2 onClick={onTitleClick}>{service}</h2>
              <Buttons {...{ isEditing, onCancelClick, onEditClick }} />
            </div>

            <Error {...{ isEditing, isError }} />

            <div className="cabinet__article-grid">
              <MainImage {...{ isEditing, mainFileUrl, onAddMainImageClick, onMainImageDelete }} />
              <Fields {...{ isEditing, register, setValue }} />
            </div>

            <label>
              <span>Описание</span>
              <textarea
                readOnly={!isEditing}
                placeholder="Напишите о себе или подробнее о предостовляемой услуге.
Пожалуйста, не вводите тут ссылки на соцсети или сайты, номера телефонов."
                {...register("description", {
                  required: { value: true, message: "Укажите описание" },
                  minLength: { value: 20, message: "Миниамльная длина описаняи 20 символов" }
                })}
              />
            </label>

            <div className="row-service-price">
              <label>
                <span>Услуги</span>
                <input type="text" placeholder="Введите название услуги" />
              </label>
              <label>
                <span>Цена</span>
                <input type="text" placeholder="от $100" />
              </label>
              {isEditing && <p>+ Добавить строку</p>}
            </div>

            <input
              type="file"
              name={portfolioFile.name}
              ref={inputPortfolioFileRef}
              onChange={portfolioFile.onChange}
              onBlur={portfolioFile.onBlur}
              hidden={true}
              style={{ display: "none", visibility: "hidden" }}
            />

            <input
              type="file"
              name={mainFile.name}
              ref={inputMainFileRef}
              onChange={mainFile.onChange}
              onBlur={mainFile.onBlur}
              hidden={true}
              style={{ display: "none", visibility: "hidden" }}
            />

            <Portfolio {...{ isEditing, portfolio, onAddPortfolioImageClick, onPortfolioImageDelete }} />

            {isEditing && <>
              <div className="row justify-end">
                <button className="btn-light" type='button' onClick={onDeleteClick}>Удалить объявление</button>
              </div>
            </>}

          </div>
        </div>
      </div>
    </form>

  )
}

export { Article }