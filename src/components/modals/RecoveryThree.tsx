import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { InputPassword } from '../modal/InputPassword';

interface IForm {
  code: string;
  passwordOne: string
  passwordTwo: string
}

interface IRecovery {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



function RecoveryThree({ setStep }: IRecovery) {
  const { register, handleSubmit, formState, reset, setError, clearErrors } = useForm<IForm>({ mode: 'onChange', reValidateMode: 'onChange', });

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    if (data.passwordOne !== data.passwordTwo) {
      return setError("root", { message: "Подтверждение пароля должно совпадать с предоставленным паролем" })
    }

    setStep(4);
    reset();
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
        disabled={Boolean(isError)}
        style={{ marginBottom: 0 }}
      >
        Восстановить
      </button>
    </form>
  </>)
}

export { RecoveryThree }