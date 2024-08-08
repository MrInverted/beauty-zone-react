import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { closeCardMakeReview } from '../../redux/card-slice';

import Modal from "../modal";
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../data/url';
import { IResponse } from '../../data/models';

const defaultStars = new Array(5).fill("")

interface IForm {
  name: string;
  email: string;
  text: string;
  file?: File;
}



function CardMakeReview() {
  const dispatch = useAppDispatch();
  const { _id } = useAppSelector(store => store.card)
  const [fileUrl, setFileUrl] = React.useState("");
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [stars, setStars] = React.useState({ selected: 0, hovered: 0 });
  const { handleSubmit, register, reset, formState, setValue, setError, clearErrors, trigger } = useForm<IForm>({ mode: "all" })

  const onCloseMakeReviews = () => dispatch(closeCardMakeReview());
  const onAddPhotoClick = () => fileRef.current?.click();
  const onStarHover = (index: number) => setStars({ ...stars, hovered: index + 1 });
  const onStarClick = (index: number) => setStars({ ...stars, selected: index + 1 });

  const setClassName = (index: number) => (stars.selected >= index + 1) ? 'hovered' :
    (stars.hovered >= index + 2) ? 'hovered' : '';

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    const rating = stars.selected;

    const toSend = {
      ...data,
      rating,
      articleId: _id
    }

    axios.postForm(`${BACKEND_URL}/api/comment/`, toSend)
      .then(success => {
        reset();
        setFileUrl("");
        setStars({ selected: 0, hovered: 0 });
        dispatch(closeCardMakeReview());
        toast.success("Отзыв успешно отправлен");
      })
      .catch(e => {
        const error = e as AxiosError<IResponse>;
        const message = error.response?.data.err;
        if (message) {
          setError("root", { message });
        } else {
          toast.error("Что-то пошло не так...");
          console.warn(message);
        }
      })
  }

  const onInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0)

    if (!file) return;

    const isJpg = file.type === "image/jpeg" || file.type === "image/jpg";
    const isPng = file.type === "image/png";
    const isImage = isJpg || isPng;

    if (isImage === false) {
      setError('file', { message: "Возможны только форматы jpg, jpeg, png" });
      setFileUrl("");
      return;
    }

    clearErrors("file");
    setValue('file', file);
    trigger("file");

    const src = URL.createObjectURL(file);

    setFileUrl(src);
  }

  const isError = formState.errors.name?.message
    || formState.errors.email?.message
    || formState.errors.text?.message
    || formState.errors.file?.message
    || formState.errors.root?.message;

  const { isValid } = formState;

  return (
    <Modal title='Оставить отзыв' closeModal={onCloseMakeReviews}>
      <div className="make-review__content">

        {isError && <>
          <div className="modal__error">
            <img src="/images/modal-error.svg" alt="" />
            <span>{isError}</span>
          </div>
        </>}

        <div className="make-review__stars">

          {defaultStars.map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className={setClassName(index)}
              onMouseEnter={onStarHover.bind(null, index)}
              onMouseLeave={onStarHover.bind(null, 0)}
              onClick={onStarClick.bind(null, index)}
            >
              <path
                d="M13.9238 0.566113C13.9365 0.530538 13.9519 0.517318 13.96 0.511772C13.9704 0.504664 13.9841 0.5 14 0.5C14.0159 0.5 14.0296 0.504664 14.04 0.511772C14.048 0.517318 14.0635 0.530539 14.0762 0.566113L17.2875 9.57675C17.4339 9.98755 17.809 10.2855 18.2573 10.306L27.4175 10.726C27.4391 10.727 27.4496 10.733 27.458 10.7401C27.4694 10.7497 27.4839 10.7685 27.4928 10.7974C27.5017 10.8261 27.5018 10.8546 27.496 10.8772C27.4909 10.8968 27.4807 10.9159 27.4582 10.9347L20.2827 16.9235C19.9453 17.2051 19.8098 17.6601 19.9204 18.0786L22.3704 27.3488C22.3803 27.3864 22.3762 27.4124 22.3696 27.4307C22.3621 27.4515 22.3483 27.4699 22.3311 27.483C22.3139 27.4961 22.2993 27.4996 22.2915 27.5C22.2875 27.5002 22.276 27.5008 22.2536 27.4852L14.6076 22.1759C14.2406 21.9211 13.7594 21.9211 13.3924 22.1759L5.7464 27.4852C5.72404 27.5008 5.71255 27.5002 5.70849 27.5C5.70072 27.4996 5.68608 27.4961 5.6689 27.483C5.65174 27.4699 5.63792 27.4515 5.63041 27.4307C5.62379 27.4124 5.61968 27.3864 5.62961 27.3488L8.07959 18.0786C8.19018 17.6601 8.05473 17.2051 7.7173 16.9235L0.541845 10.9347C0.519286 10.9159 0.509101 10.8968 0.504031 10.8772C0.498189 10.8546 0.498263 10.8261 0.507165 10.7974C0.516096 10.7685 0.530629 10.7497 0.542005 10.7401C0.55042 10.733 0.560915 10.727 0.582539 10.726L9.7427 10.306C10.191 10.2855 10.5661 9.98755 10.7125 9.57675L13.9238 0.566113Z"
                stroke="#FF5EA6"
              />
            </svg>
          ))}

        </div>

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input type="text" placeholder="Имя" autoComplete='off'  {...register("name", {
            required: { value: true, message: "Имя обязательно к заполнению" },
            minLength: { value: 3, message: "Имя минимум 3 символа" }
          })} />

          <input type="text" placeholder="E-mail" autoComplete='off' {...register("email", {
            required: { value: true, message: "E-mail обязателен к заполнению" },
            minLength: { value: 10, message: "E-mail минимум 10 символов" },
            pattern: { value: /\S{3,}@\w{2,}\.\w{2,}/gi, message: "E-mail неверного формата" }
          })} />

          <input type="file" style={{ display: "none" }} ref={fileRef} onChange={onInputFileChange} />

          <textarea placeholder="Напишите про свои впечатления" autoComplete='off' {...register("text", {
            required: { value: true, message: "Текст обязателен к заполнению" },
            minLength: { value: 10, message: "Текст минимум 10 символов" }
          })} />

          <div className="make-review__add-photo" onClick={onAddPhotoClick}>
            {fileUrl ? <img src={fileUrl} alt='' /> : <span>+ Добавить</span>}
          </div>

          <button
            type="submit"
            className="btn-dark"
            disabled={!formState.isValid}
          >
            Отправить
          </button>

          <p>Продолжая вы соглашаетесь с <a href="">Политикой конфидециальности</a></p>
        </form>
      </div>
    </Modal>
  )
}

export { CardMakeReview }