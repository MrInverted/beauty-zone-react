import React from 'react';
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

import { Portfolio } from './Portfolio';
import { MainImage } from './MainImage';
import { Fields } from './Fields';
import { Buttons } from '../Buttons';
import { Error } from "../Error"
import { FieldsMore } from './FieldsMore';
import { IArticleModel, IResponse } from '../../../data/models';
import { useArticleFormWithDefaultValues } from '../../../hooks/useArticleFormWithDefaultValue';
import { BACKEND_URL } from '../../../data/url';



function ArticleFromDb(props: IArticleModel) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isOpened, setIsOpened] = React.useState(false);

  const {
    onFormSubmit,
    handleSubmit,
    register,
    setValue,
    setError,
    isError,

    inputPortfolioFileRef,
    portfolioFile,
    portfolio,

    inputMainFileRef,
    mainFile,
    mainImage,

    onAddPortfolioImageClick,
    onAddMainImageClick,
    onPortfolioImageDelete,
    onMainImageDelete
  } = useArticleFormWithDefaultValues({ setIsEditing, ...props })

  const onTitleClick = () => setIsOpened(!isOpened);
  const onEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => { e.preventDefault(); setIsEditing(true); }
  const onCancelClick = () => setIsEditing(false);
  const onDeleteClick = () => {
    axios.delete(`${BACKEND_URL}/api/article/${props._id}`)
      .then(() => toast.success("Карточка успешно удалена"))
      .catch((e) => {
        const error = e as AxiosError<IResponse>;
        const message = error.response?.data.err;
        toast.error("Что-то пошло не так...")
        console.warn(message);
      })
  }



  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className='article-shadow'>
      <div className={isOpened ? "folded opened" : "folded"}>
        <div className="row flex-row" onClick={onTitleClick}>
          <span>{props.service}</span>
          <img src="/images/account-chevron-down.svg" alt="" />
        </div>

        <div className="min-height-0">
          <div className="cabinet__article">
            <div className="cabinet__title">
              <h2 onClick={onTitleClick}>{props.service}</h2>

              <Buttons {...{ isEditing, onCancelClick, onEditClick }} />
            </div>

            <Error {...{ isEditing, isError }} />

            <div className="cabinet__article-grid">
              <MainImage {...{ isEditing, mainImage, onAddMainImageClick, onMainImageDelete }} />

              <Fields {...{ isEditing, register, setValue }} />
            </div>

            <FieldsMore {...{
              isEditing,
              register,
              setValue,
              setError,
              services: props.services.map(el => [el.split("---").at(0), el.split("---").at(1)]) as [string, string][]
            }} />

            <Portfolio {...{ isEditing, portfolio, onAddPortfolioImageClick, onPortfolioImageDelete }} />

            {isEditing && <>
              <div className="row justify-end">
                <button className="btn-light" type='button' onClick={onDeleteClick}>Удалить объявление</button>
              </div>
            </>}

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

          </div>
        </div>
      </div>
    </form>

  )
}

export { ArticleFromDb }