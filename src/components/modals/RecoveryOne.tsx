import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { closeLoginRegisterRecoveryModals, showLoginModal } from '../../redux/modals-slice';

interface IForm {
  email: string;
  password: string;
}

interface IRecovery {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



function RecoveryOne({ setStep }: IRecovery) {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState, reset } = useForm<IForm>({ mode: 'onChange', reValidateMode: 'onChange' });

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    // after axios ... setError("root", { message: "Аккаунт с таким e-mail не найден" })
    // onChange input ... clearError

    setStep(2);

    reset();
  }

  const onLoginClick = () => {
    dispatch(closeLoginRegisterRecoveryModals())
    dispatch(showLoginModal())
  }

  const isError = formState.errors.email?.message
    || formState.errors.password?.message
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
        disabled={Boolean(isError)}>
        Восстановить
      </button>

      <p className='modal__question'>Вспомнили пароль? <span onClick={onLoginClick}>Войти</span></p>
    </form>
  </>)
}

export { RecoveryOne }