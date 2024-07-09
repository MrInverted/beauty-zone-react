import React from 'react'

import Modal from "../../modal"
import { allServices } from '../../../data/catalogue';
import { useAppDispatch } from '../../../redux/store';
import { setAddAnArticleService } from '../../../redux/add-article-slice';



function AddAnArticle() {
  const dispatch = useAppDispatch()
  const [isOpened, setIsOpened] = React.useState(false);
  const [service, setService] = React.useState("");

  const onModalClose = () => setIsOpened(false);
  const onModalOpen = () => setIsOpened(true);
  const onModalNext = () => {
    setIsOpened(false);
    if (service) dispatch(setAddAnArticleService(service))
  }

  const onItemClick = (inc: string) => setService(inc);

  return (<>
    <div className="row flex-row justify-end">
      <button className="btn-dark" onClick={onModalOpen}>Добавить объявление</button>
    </div>

    {isOpened && (
      <Modal title='Выберите категорию' closeModal={onModalClose}>
        <div className="choose-category__content">
          <div className="choose-category__grid">

            {allServices.map((el, index) => (
              <div
                key={index}
                className={service === el.russian ? 'choose-category__item selected' : 'choose-category__item'}
                onClick={onItemClick.bind(null, el.russian)}
              >
                <img src={el.imageUrl} alt="" />
                <h3>{el.russian}</h3>
              </div>
            ))}

          </div>

          <div className="choose-category__row">
            <button className="btn-light" onClick={onModalClose}>Назад</button>
            <button className="btn-dark" onClick={onModalNext}>Далее</button>
          </div>

        </div>
      </Modal>
    )}
  </>)
}

export { AddAnArticle }