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
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setArticles } from '../../../redux/account-slice';



function ArticleFromDb(props: IArticleModel) {
  const dispatch = useAppDispatch();
  const { ownerId, token } = useAppSelector(store => store.auth);
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

  const onTitleClick = () => {
    if (isOpened) {
      setIsOpened(false);
      setIsEditing(false);
    } else {
      setIsOpened(true);
    }
  }
  const onEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => { e.preventDefault(); setIsEditing(true); }
  const onCancelClick = () => setIsEditing(false);
  const onDeleteClick = async () => {
    const axiosWithCredentials = axios.create({
      headers:
        { Authorization: `Bearer ${token}` }
    })

    try {
      const deleteResponse = await axiosWithCredentials.delete(`${BACKEND_URL}/api/article/${props._id}`);
      toast.success("Карточка успешно удалена");

      const getAllResponse = await axios.get(`${BACKEND_URL}/api/account/article/${ownerId}`);
      dispatch(setArticles(getAllResponse.data.articles));
      toast.success("Список карточек обновлен");
    } catch (e) {
      const error = e as AxiosError<IResponse>;
      const message = error.response?.data.err;
      toast.error("Что-то пошло не так...")
      console.warn(message);
    }
  }



  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className='article-shadow'>
      <div className={isOpened ? "folded opened" : "folded"}>
        <div className="cabinet-article-title" onClick={onTitleClick}>
          <span>{props.service}</span>
          <img src="/images/account-chevron-down.svg" alt="" />
        </div>

        <div className="min-height-0">
          <div className="cabinet__article">
            <div className="cabinet__title">
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