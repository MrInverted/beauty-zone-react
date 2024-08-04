import React from 'react'
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { showLoginModal } from '../../redux/modals-slice';
import { setSecondStepRegister } from '../../redux/register-slice';
import { IntroSearchState } from '../intro/IntroSearchState';
import { IntroSearchCity } from '../intro/IntroSeacrhCity';
import { BACKEND_URL } from '../../data/url';

interface IForm {
  state: string;
  city: string;
  building: string;
  street: string;
}

interface IRegister {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IResponse {
  err?: string;
  success?: string;
}




function RegisterTwo({ setStep }: IRegister) {
  const dispatch = useAppDispatch()
  const registerData = useAppSelector(store => store.register);
  const { register, handleSubmit, formState, reset, setError, setValue } = useForm<IForm>({ mode: 'onChange', reValidateMode: 'onChange' });

  const onFormSubmit: SubmitHandler<IForm> = async (inc) => {
    dispatch(setSecondStepRegister(inc));

    try {
      const { data } = await axios.post<IResponse>(`${BACKEND_URL}/auth/register`, { ...registerData, ...inc })
      setStep(3);
      reset();
    } catch (e) {
      const error = e as AxiosError<IResponse>;
      const message = error.response?.data.err;
      if (message) {
        setError("root", { message });
      } else {
        toast.error("Что-то пошло не так...", { position: 'top-center' })
      }
    }
  }

  const onLoginClick = () => dispatch(showLoginModal());

  const isError = formState.errors.state?.message
    || formState.errors.city?.message
    || formState.errors.building?.message
    || formState.errors.street?.message
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

        <IntroSearchState setValue={(state) => setValue("state", state)} />

        <IntroSearchCity setValue={(city) => setValue("city", city)} />

        <div className="modal__sub-row">
          <input type="text" placeholder="Улица" {...register("street", {
            required: { value: true, message: "Улица обязательна к заполнению" },
          })} />

          <input type="text" placeholder="Дом" {...register("building", {
            required: { value: true, message: "Дом обязателен к заполнению" },
          })} />
        </div>

        <button
          type="submit"
          className="btn-dark"
          disabled={!formState.isValid}
          style={{ marginBottom: "20px" }}
        >
          Регистрация
        </button>

        <p className='modal__question'>Уже есть аккаунт? <span onClick={onLoginClick}>Войти</span></p>
      </form>
    </>
  )
}

export { RegisterTwo }