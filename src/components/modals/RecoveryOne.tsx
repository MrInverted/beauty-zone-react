import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { showLoginModal } from '../../redux/modals-slice';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { setEmail } from '../../redux/register-slice';
import { BACKEND_URL } from '../../data/url';
import { IResponse } from '../../data/models';

interface IForm {
  email: string;
}

interface IRecovery {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



function RecoveryOne({ setStep }: IRecovery) {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState, reset, setError } = useForm<IForm>({ mode: 'onChange', reValidateMode: 'onChange' });

  const onFormSubmit: SubmitHandler<IForm> = async (inc) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/auth/recovery`, inc);
      toast.success("Запрос успешно отправлен");
      dispatch(setEmail(inc.email));
      setStep(2);
      reset();
    } catch (e) {
      const error = e as AxiosError<IResponse>;
      const message = error.response?.data.err;
      if (message) setError("root", { message });
      toast.error("Что-то пошло не так...");
      console.warn(message);
    }
  }


  const onLoginClick = () => dispatch(showLoginModal())

  const isError = formState.errors.email?.message
    || formState.errors.root?.message;

  return (<>
    {isError && <>
      <div className="modal__error">
        <img src="/images/modal-error.svg" alt="" />
        <span>{isError}</span>
      </div>
    </>}

    <form action="/" method="post" onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="E-mail" {...register("email", {
        required: { value: true, message: "E-mail обязателен к заполнению" },
        minLength: { value: 10, message: "E-mail слишком короткий" },
        pattern: { value: /\S{3,}@\w{2,}\.\w{2,}/gi, message: "E-mail неверного формата" }
      })} />

      <button
        type="submit"
        className="btn-dark"
        disabled={!formState.isValid}>
        Восстановить
      </button>

      <p className='modal__question'>Вспомнили пароль? <span onClick={onLoginClick}>Войти</span></p>
    </form>
  </>)
}

export { RecoveryOne }