import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { closeCardRequest } from '../../redux/card-slice';

import Modal from "../modal"
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../data/url';
import { IResponse } from '../../data/models';

interface IForm {
  name: string;
  phone: string;
  text: string;
}


function CardMakeRequest() {
  const dispatch = useAppDispatch();
  const { _id, _ownerId } = useAppSelector(store => store.card)
  const { handleSubmit, register, formState, reset, setError } = useForm<IForm>({ mode: "onChange", reValidateMode: "onChange" });

  const onFormSubmit: SubmitHandler<IForm> = async (data) => {
    const toSend = {
      ...data,
      articleId: _id,
      ownerId: _ownerId
    }

    try {
      await axios.post(`${BACKEND_URL}/api/request`, toSend);
      reset();
      dispatch(closeCardRequest());
      toast.success("Запрос успешно отправлен");
    } catch (e) {
      const error = e as AxiosError<IResponse>;
      const message = error.response?.data.err;
      if (message) setError("root", { message });
      toast.error("Что-то пошло не так...");
      console.warn(message);
    }
  }

  const onCloseRequestClick = () => dispatch(closeCardRequest())

  const isError = formState.errors.name?.message
    || formState.errors.phone?.message
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
          <input type="text" placeholder="Имя" autoComplete='off' {...register("name", {
            required: { value: true, message: "Имя обязателено к заполнению" },
            minLength: { value: 3, message: "Имя слишком короткое" }
          })} />

          <input type="tel" placeholder="Номер телефона" autoComplete='off' {...register("phone", {
            required: { value: true, message: "Номер телефона обязателен к заполнению" },
            minLength: { value: 10, message: "Номер телефона слишком короткий" }
          })} />


          <textarea placeholder="Комментарий" autoComplete='off' {...register("text", {
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

export { CardMakeRequest }