import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { InputPassword } from '../modal/InputPassword';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useAppSelector } from '../../redux/store';
import { BACKEND_URL } from '../../data/url';
import { IResponse } from '../../data/models';

interface IForm {
  code: string;
  passwordOne: string
  passwordTwo: string
}

interface IRecovery {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



function RecoveryThree({ setStep }: IRecovery) {
  const { email } = useAppSelector(store => store.register);
  const { register, handleSubmit, formState, reset, setError, clearErrors } = useForm<IForm>({ mode: 'onChange', reValidateMode: 'onChange', });

  const onFormSubmit: SubmitHandler<IForm> = async (inc) => {
    if (inc.passwordOne !== inc.passwordTwo) {
      return setError("root", { message: "Подтверждение пароля должно совпадать с предоставленным паролем" })
    }

    try {
      const { data } = await axios.patch(`${BACKEND_URL}/api/auth/recovery-password`, { ...inc, email });
      setStep(4);
      reset();
    } catch (e) {
      const error = e as AxiosError<IResponse>;
      const message = error.response?.data.err;
      if (message) setError("root", { message });
      toast.error("Что-то пошло не так...");
      console.warn(message);
    }
  }

  const isError = formState.errors.code?.message
    || formState.errors.passwordOne?.message
    || formState.errors.passwordTwo?.message
    || formState.errors.root?.message;

  return (<>
    {isError && <>
      <div className="modal__error">
        <img src="/images/modal-error.svg" alt="" />
        <span>{isError}</span>
      </div>
    </>}

    <form action="/" method="post" onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Код активации" {...register("code", {
        required: { value: true, message: "Код активации обязателен к заполнению" },
        minLength: { value: 5, message: "Код активации слишком короткий" },
      })} />

      <InputPassword register={register("passwordOne", {
        required: { value: true, message: "Пароль обязателен к заполнению" },
        minLength: { value: 6, message: "Пароль слишком короткий" },
        onChange: () => clearErrors('root')
      })} />

      <InputPassword register={register("passwordTwo", {
        required: { value: true, message: "Пароль обязателен к заполнению" },
        minLength: { value: 6, message: "Пароль слишком короткий" },
        onChange: () => clearErrors('root')
      })} />

      <button
        type="submit"
        className="btn-dark"
        disabled={!formState.isValid}
        style={{ marginBottom: 0 }}
      >
        Восстановить
      </button>
    </form>
  </>)
}

export { RecoveryThree }