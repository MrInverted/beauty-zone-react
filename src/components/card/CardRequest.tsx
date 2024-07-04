import React from 'react'

import Modal from "../modal"
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../redux/store';
import { closeCardRequest } from '../../redux/card-slice';

interface IForm {
  name: string;
  tel: string;
  text: string;
}


function CardRequest() {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, formState, reset } = useForm<IForm>({ mode: "onChange", reValidateMode: "onChange" })

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)

    reset()
  }

  const onCloseRequestClick = () => dispatch(closeCardRequest())

  const isError = formState.errors.name?.message
    || formState.errors.tel?.message
    || formState.errors.text?.message
    || formState.errors.root?.message;

  return (
    <Modal title='Оставить запрос мастеру' closeModal={onCloseRequestClick} >
      <div className="request__content">

        {isError && <>
          <div className="modal__error">
            <img src="/images/modal-error.svg" alt="" />
            <span>{isError}</span>
            {/* <span>Неверный адрес электронной почты или пароль</span> */}
          </div>
        </>}

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input type="text" placeholder="Имя" {...register("name", {
            required: { value: true, message: "Имя обязателено к заполнению" },
            minLength: { value: 3, message: "Имя слишком короткое" }
          })} />

          <input type="tel" placeholder="Номер телефона" {...register("tel", {
            required: { value: true, message: "Номер телефона обязателен к заполнению" },
            minLength: { value: 10, message: "Номер телефона слишком короткий" }
          })} />


          <textarea placeholder="Комментарий" {...register("text", {
            required: { value: true, message: "Текст обязателен к заполнению" },
            minLength: { value: 10, message: "Текст слишком короткий" }
          })} />

          <button
            type="submit"
            className="btn-dark"
            disabled={!formState.isValid}
          >
            Отправить
          </button>

          <p>Продолжая вы соглашаетесь с <a href="">Политикой конфидециальности</a></p>
        </form>
      </div>
    </Modal>
  )
}

export { CardRequest }