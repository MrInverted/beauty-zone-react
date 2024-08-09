import React from 'react'
import { useAppSelector } from '../../../redux/store';
import { useArticleForm } from '../../../hooks/useArticleForm';
import { Portfolio } from './Portfolio';
import { MainImage } from './MainImage';
import { Fields } from './Fields';
import { Buttons } from '../Buttons';
import { Error } from "../Error"
import { FieldsMore } from './FieldsMore';



function Article() {
  const { service } = useAppSelector(store => store.addArticle);

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
  } = useArticleForm({ setIsEditing })

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



  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className='article-shadow'>
      <div className={isOpened ? "folded opened" : "folded"}>
        <div className="cabinet-article-title" onClick={onTitleClick}>
          <span>{service}</span>
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

            <FieldsMore {...{ isEditing, register, setValue, setError }} />

            <Portfolio {...{ isEditing, portfolio, onAddPortfolioImageClick, onPortfolioImageDelete }} />

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

export { Article }