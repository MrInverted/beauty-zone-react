import React from 'react'

interface IMainImage {
  isEditing: boolean;
  mainFileUrl: string;
  onAddMainImageClick: () => void;
  onMainImageDelete: () => void;
}

function MainImage({ isEditing, mainFileUrl, onAddMainImageClick, onMainImageDelete }: IMainImage) {
  return (
    <div className="cabinet__article-image">

      {isEditing
        ? (<>
          <div className="add-image" onClick={onAddMainImageClick}>
            {mainFileUrl ? <img src={mainFileUrl} alt="" /> : <span>+ Добавить</span>}
          </div>

          <div className="close" onClick={onMainImageDelete}>
            <span>×</span>
          </div>
        </>)
        : (<>
          <div className="add-image">
            {mainFileUrl && <img src={mainFileUrl} alt="" />}
          </div>
        </>)
      }

    </div>
  )
}

export { MainImage }