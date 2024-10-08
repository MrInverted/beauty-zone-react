import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form';
import { InputPassword } from '../modal/InputPassword';
import { useAppDispatch } from '../../redux/store';
import { showLoginModal } from '../../redux/modals-slice';
import { setFirstStepRegister } from '../../redux/register-slice';


interface IForm {
  name: string;
  surname: string;
  email: string;
  password: string
}

interface IRegister {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



function RegisterOne({ setStep }: IRegister) {
  const { register, handleSubmit, formState, reset } = useForm<IForm>({ mode: 'onChange', reValidateMode: 'onChange' });
  const dispatch = useAppDispatch();

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    dispatch(setFirstStepRegister(data));
    setStep(2);
    reset();
  }

  const onLoginClick = () => dispatch(showLoginModal());

  const isError = formState.errors.name?.message
    || formState.errors.surname?.message
    || formState.errors.email?.message
    || formState.errors.password?.message
    || formState.errors.root?.message;

  return (
    <>
      {isError && <>
        <div className="modal__error">
          <img src="/images/modal-error.svg" alt="" />
          <span>{isError}</span>
        </div>
      </>}

      <form action="/" method="post" onSubmit={handleSubmit(onFormSubmit)}>

        <input type="text" placeholder="Имя" {...register("name", {
          required: { value: true, message: "Имя обязателено к заполнению" },
          minLength: { value: 3, message: "Имя слишком короткое" },
          pattern: { value: /^([а-яёА-ЯЁa-z]+)$/gi, message: "Для имени доступны только буквы и без пробелов" }
        })} />

        <input type="text" placeholder="Фамилия" {...register("surname", {
          required: { value: true, message: "Фамилия обязательна к заполнению" },
          minLength: { value: 3, message: "Фамилия слишком короткая" },
          pattern: { value: /^([а-яёА-ЯЁa-z]+)$/gi, message: "Для фамилии доступны только буквы и без пробелов" }
        })} />

        <input type="text" placeholder="E-mail" {...register("email", {
          required: { value: true, message: "E-mail обязателен к заполнению" },
          minLength: { value: 10, message: "E-mail слишком короткий" },
          pattern: { value: /^(\S{3,}@\w{2,}\.\w{2,})$/gi, message: "E-mail неверного формата" }
        })} />

        <InputPassword register={register("password", {
          required: { value: true, message: "Пароль обязателен к заполнению" },
          minLength: { value: 6, message: "Пароль слишком короткий" },
          pattern: { value: /^(\S+)$/gi, message: "Пароль неверного формата" }
        })} />

        <button
          type="submit"
          className="btn-dark"
          disabled={!formState.isValid}
        >
          Далее
        </button>

        <p className='modal__question'>Уже есть аккаунт? <span onClick={onLoginClick}>Войти</span></p>

      </form>
    </>
  )
}

export { RegisterOne }