import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { setPersonalInfo } from '../redux/account-slice';
import { BACKEND_URL } from '../data/url';
import { IResponse } from '../data/models';

interface IAddressForm {
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
  const dispatch = useAppDispatch();
  const { personalInfo } = useAppSelector(store => store.account);
  const { token } = useAppSelector(store => store.auth);
  const { handleSubmit, register, formState } = useForm<IAddressForm>({ mode: "all", defaultValues: personalInfo });

  const onFormSubmit: SubmitHandler<IAddressForm> = (data) => {
    const Authorization = `Bearer ${token}`;

    axios.patch(`${BACKEND_URL}/api/account/personal/info`, data, { headers: { Authorization } })
      .then(success => {
        dispatch(setPersonalInfo(success.data.user));
        toast.success("Запрос успешно отправлен");
      })
      .catch(e => {
        const error = e as AxiosError<IResponse>;
        const message = error.response?.data.err;
        toast.error("Что-то пошло не так...");
        console.warn(message);
      })

    setIsEditing(false);
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