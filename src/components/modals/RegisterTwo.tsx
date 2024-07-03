import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { closeRegisterModal, showLoginModal } from '../../redux/modals-slice';

interface IForm {
  state: string;
  city: string;
  building: string;
  street: string;
  district: string;
}

interface IRegister {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



function RegisterTwo({ setStep }: IRegister) {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState, reset } = useForm<IForm>({ mode: 'onChange', reValidateMode: 'onChange' });

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)

    setStep(3)

    reset()
  }

  const onLoginClick = () => {
    dispatch(closeRegisterModal())
    dispatch(showLoginModal())
  }

  const isError = formState.errors.state?.message
    || formState.errors.city?.message
    || formState.errors.building?.message
    || formState.errors.street?.message
    || formState.errors.district?.message
    || formState.errors.root?.message;

  return (
    <>
      <p style={{ color: "#B0A6BD", fontSize: "12px", marginBottom: "20px" }}>
        *Адрес не публикуется на сайте, но с его помощью мы ориентируем клиента о ближайших мастерах
      </p >

      {isError && <>
        <div className="modal__error">
          <img src="/images/modal-error.svg" alt="" />
          <span>{isError}</span>
        </div>
      </>
      }

      <form action="/" method="post" onSubmit={handleSubmit(onFormSubmit)}>

        <input type="text" placeholder="Штат" {...register("state", {
          required: { value: true, message: "Штат обязателен к заполнению" },
          minLength: { value: 3, message: "Штат слишком короткий" }
        })} />

        <input type="text" placeholder="Город" {...register("city", {
          required: { value: true, message: "Город обязателен к заполнению" },
          minLength: { value: 3, message: "Город слишком короткий" }
        })} />

        <div className="modal__sub-row">
          <input type="text" placeholder="Дом" {...register("building", {
            required: { value: true, message: "Дом обязателен к заполнению" },
          })} />

          <input type="text" placeholder="Улица" {...register("street", {
            required: { value: true, message: "Улица обязательна к заполнению" },
          })} />
        </div>

        <input type="text" placeholder="Район" {...register("district", {
          required: { value: true, message: "Район обязателен к заполнению" },
        })} />

        <button
          type="submit"
          className="btn-dark"
          disabled={Boolean(isError)}
          style={{ marginBottom: "20px" }}
        >
          Регистрация
        </button>

        <label className="modal__checkbox">
          <input type="checkbox" checked required />
          <span>Согласен(а) с <a href="">политикой конфидициальности</a></span>
        </label>

        <p className='modal__question'>Уже есть аккаунт? <span onClick={onLoginClick}>Войти</span></p>

      </form>
    </>
  )
}

export { RegisterTwo }