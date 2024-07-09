import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form';

interface IForm {
  name: string;
  surname: string;
  email: string;
  state: string;
  city: string;
  street: string;
  building: string;
}

interface IUsePasswordForm {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}



function useAddressForm({ setIsEditing }: IUsePasswordForm) {
  const { handleSubmit, register, formState } = useForm<IForm>({ mode: "all" })

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)
    setIsEditing(false)
  }

  const isError = formState.errors.name?.message
    || formState.errors.surname?.message
    || formState.errors.email?.message
    || formState.errors.state?.message
    || formState.errors.city?.message
    || formState.errors.street?.message
    || formState.errors.building?.message
    || formState.errors.root?.message

  return {
    onFormSubmit,
    handleSubmit,
    register,
    isError
  }
}

export { useAddressForm }