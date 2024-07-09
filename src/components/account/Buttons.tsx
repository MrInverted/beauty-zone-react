import React from 'react'

interface IButtons {
  isEditing: boolean;
  onCancelClick: React.MouseEventHandler<HTMLButtonElement>;
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Buttons({ isEditing, onEditClick, onCancelClick }: IButtons) {
  return (
    <>
      {isEditing
        ? (
          <div className="row g-10" >
            <button className="btn-dark" type='submit'>Сохранить</button>
            <button className="btn-light" type='button' onClick={onCancelClick}>Отменить</button>
          </div>
        )
        : (
          <div className="row">
            <button className="btn-light" type='button' onClick={onEditClick}>Редактировать</button>
          </div>
        )
      }
    </>
  )
}

export { Buttons }