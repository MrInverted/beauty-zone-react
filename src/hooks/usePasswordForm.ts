import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../redux/store';
import { BACKEND_URL } from '../data/url';

interface IForm {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeated: string;
}

interface IUsePasswordForm {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}



function usePasswordForm({ setIsEditing }: IUsePasswordForm) {
  const { token } = useAppSelector(store => store.auth);
  const { handleSubmit, register, formState, setValue, getValues, setError, clearErrors } = useForm<IForm>({ mode: "all" });

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    const Authorization = `Bearer ${token}`;

    axios.patch(`${BACKEND_URL}/api/account/personal/password`, data, { headers: { Authorization } })
      .then(success => toast.success("Данные успешно обновлены"))
      .catch(err => {
        toast.error("Что-то пошло не так...")
        setError("root", { message: err.response?.data?.err })
      })

    setIsEditing(false);
  }

  const onRepeatedPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setValue("newPasswordRepeated", value);

    if (value === getValues("newPassword")) {
      clearErrors("root");
    } else {
      setError("root", { message: "Новые пароли не совпадают" });
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