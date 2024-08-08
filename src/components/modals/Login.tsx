import axios, { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

import Modal from "../modal";
import { InputPassword } from '../modal/InputPassword';
import { closeLoginRegisterRecoveryModals, showRecoveryModal, showRegisterModal } from '../../redux/modals-slice';
import { useAppDispatch } from '../../redux/store';
import { setIsAuth } from '../../redux/auth-slice';
import { BACKEND_URL } from '../../data/url';
import { IResponse } from '../../data/models';
import { setPersonalInfo } from '../../redux/account-slice';

interface IForm {
  email: string;
  password: string
}



function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { register, handleSubmit, formState, reset, setError, clearErrors } = useForm<IForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onFormSubmit: SubmitHandler<IForm> = async (inc) => {
    try {
      const { data } = await axios.post<IResponse>(`${BACKEND_URL}/api/auth/login`, inc);
      dispatch(setIsAuth({ token: data.success, ownerId: data.ownerId }));
      dispatch(closeLoginRegisterRecoveryModals());
      toast.success("Запрос успешно отправлен");
      navigate("/account");
      reset();

      window.localStorage.setItem("token", data.success as string);
      window.localStorage.setItem("ownerId", data.ownerId as string);

      const verifyResponse = await axios.post(`${BACKEND_URL}/api/auth/verify`, { token: data.success });
      dispatch(setPersonalInfo(verifyResponse.data?.info));
    } catch (e) {
      const error = e as AxiosError<IResponse>;
      const message = error.response?.data.err;
      if (message) setError("root", { message });
      toast.error("Что-то пошло не так...");
      console.warn(message);
    }
  }

  const onCloseModal = () => dispatch(closeLoginRegisterRecoveryModals());
  const onCreateAccountClick = () => dispatch(showRegisterModal());
  const onRecoveryPasswordClick = () => dispatch(showRecoveryModal());

  const isError = formState.errors.email?.message
    || formState.errors.password?.message
    || formState.errors.root?.message;

  return (
    <Modal title='Вход' closeModal={onCloseModal}>

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
          pattern: { value: /\S{3,}@\w{2,}\.\w{2,}/gi, message: "E-mail неверного формата" },
          onChange: () => clearErrors("root")
        })} />

        <InputPassword register={register("password", {
          required: { value: true, message: "Пароль обязателен к заполнению" },
          minLength: { value: 6, message: "Пароль слишком короткий" },
          onChange: () => clearErrors("root")
        })} />

        <p className='modal__question'>Забыли пароль? <span onClick={onRecoveryPasswordClick}>Восстановить пароль</span></p>

        <button
          type="submit"
          className="btn-dark"
          disabled={!formState.isValid}
        >
          Войти
        </button>
      </form>

      <p className='modal__question'>Еще нет аккаунта? <span onClick={onCreateAccountClick}>Создать аккаунт</span></p>

    </Modal>
  )
}

export { Login }