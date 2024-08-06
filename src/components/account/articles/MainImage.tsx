import React from 'react'
import { BACKEND_URL } from '../../../data/url';

interface IMainImage {
  isEditing: boolean;
  mainImage: File | null | undefined | string;
  onAddMainImageClick: () => void;
  onMainImageDelete: () => void;
}

function MainImage({ isEditing, mainImage, onAddMainImageClick, onMainImageDelete }: IMainImage) {
  const url = (mainImage instanceof File) ? URL.createObjectURL(mainImage) :
    (typeof mainImage === "string") ? `${BACKEND_URL}${mainImage}` : "";

  return (
    <div className="cabinet__article-image">

      {isEditing
        ? (<>
          <div className="add-image" onClick={onAddMainImageClick}>
            {url ? <img src={url} alt="" /> : <span>+ Добавить</span>}
          </div>

          <div className="close" onClick={onMainImageDelete}>
            <span>×</span>
          </div>
        </>)
        : (<>
          <div className="add-image">
            {url && <img src={url} alt="" />}
          </div>
        </>)
      }

    </div>
  )
}

export { MainImage }