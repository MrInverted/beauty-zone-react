import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IForm {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeated: string;
}

interface IUsePasswordForm {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}



function usePasswordForm({ setIsEditing }: IUsePasswordForm) {
  const { handleSubmit, register, formState, setValue, getValues, setError, clearErrors } = useForm<IForm>({ mode: "all" })

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)
    setIsEditing(false)
  }

  const onRepeatedPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setValue("newPasswordRepeated", value);

    if (value === getValues("newPassword")) {
      clearErrors("root")
    } else {
      setError("root", { message: "Новые пароли не совпадают" })
    }
  }

  const isError = formState.errors.oldPassword?.message
    || formState.errors.newPassword?.message
    || formState.errors.newPasswordRepeated?.message
    || formState.errors.root?.message;


  return {
    onFormSubmit,
    handleSubmit,
    register,
    isError,

    onRepeatedPasswordChange
  }
}

export { usePasswordForm }