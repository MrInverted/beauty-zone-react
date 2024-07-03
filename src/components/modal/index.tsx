import React from 'react'
import "./modal.scss";

interface IModal {
  title: string;
  closeModal: () => void;
  children?: React.ReactNode
}



function index({ title, closeModal, children }: IModal) {

  const onCloseModal: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal()
  }

  return (
    <div className="modal" onClick={onCloseModal}>
      <div className="container">
        <div className="modal__content">
          <h3>{title}</h3>

          {children}

          <div className="modal__close" onClick={closeModal}>
            <img src="/images/modal-close.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index