import React from 'react'

import Modal from "../modal";

import { SubmitHandler, useForm } from 'react-hook-form';
import { InputPassword } from '../modal/InputPassword';

import { closeLoginModal, showRecoveryModal, showRegisterModal } from '../../redux/modals-slice';
import { useAppDispatch } from '../../redux/store';

interface IForm {
  email: string;
  password: string
}



function Login() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState, reset } = useForm<IForm>({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)

    reset()
  }

  const onCloseModal = () => {
    dispatch(closeLoginModal())
  }

  const onCreateAccountClick = () => {
    dispatch(closeLoginModal())
    dispatch(showRegisterModal())
  }

  const onRecoveryPasswordClick = () => {
    dispatch(closeLoginModal())
    dispatch(showRecoveryModal())
  }

  const onSignInClick = () => {
    dispatch(closeLoginModal())
  }

  const isError = formState.errors.email?.message
    || formState.errors.password?.message
    || formState.errors.root?.message;

  return (
    <Modal title='Вход' closeModal={onCloseModal}>

      {isError && <>
        <div className="modal__error">
          <img src="/images/modal-error.svg" alt="" />
          <span>{isError}</span>
          {/* <span>Неверный адрес электронной почты или пароль</span> */}
        </div>
      </>}

      <form action="/" method="post" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="E-mail" {...register("email", {
          required: { value: true, message: "E-mail обязателен к заполнению" },
          minLength: { value: 10, message: "E-mail слишком короткий" },
          pattern: { value: /\S{3,}@\w{2,}\.\w{2,}/gi, message: "E-mail неверного формата" }
        })} />

        <InputPassword register={register("password", {
          required: { value: true, message: "Пароль обязателен к заполнению" },
          minLength: { value: 6, message: "Пароль слишком короткий" }
        })} />

        <p className='modal__question'>Забыли пароль? <span onClick={onRecoveryPasswordClick}>Восстановить пароль</span></p>

        <button
          type="submit"
          className="btn-dark"
          disabled={Boolean(isError)}
          onClick={onSignInClick}
        >
          Войти
        </button>

        <p className='modal__question'>Еще нет аккаунта? <span onClick={onCreateAccountClick}>Создать аккаунт</span></p>
      </form>

    </Modal>
  )
}

export { Login }