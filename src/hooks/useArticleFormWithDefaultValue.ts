import React from 'react';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { BACKEND_URL } from '../data/url';
import { IArticleModel, IResponse } from '../data/models';
import { setArticles } from '../redux/account-slice';

type FileType = File | null | undefined;

export interface IArticleFormWithDefaultValue {
  mainFile: FileType | string;
  priceMin: number;
  priceMax: number;
  workingDays: string;
  workingHours: string;
  phoneNumber: string;
  description: string;
  service: string;
  services: [string, string][];
  portfolio: (FileType | string)[];
}

interface IUseArticleForm extends IArticleModel {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

type HandleImageType = (file: FileType, fieldName: keyof IArticleFormWithDefaultValue) => FileType | undefined;



function useArticleFormWithDefaultValues(props: IUseArticleForm) {
  const dispatch = useAppDispatch();
  const { token, ownerId } = useAppSelector(store => store.auth);

  const { handleSubmit, register, formState, setValue, setError, clearErrors, trigger } = useForm<IArticleFormWithDefaultValue>({
    mode: "all",
    defaultValues: {
      mainFile: props.mainFileLink,
      priceMin: props.priceMin,
      priceMax: props.priceMax,
      workingDays: props.workingDays,
      workingHours: props.workingHours,
      phoneNumber: props.phoneNumber,
      description: props.description,
      services: props.services.map(el => [el.split("---").at(0), el.split("---").at(1)]),
      portfolio: props.portfolioLink,
      service: props.service,
    }
  })

  const inputPortfolioFileRef = React.useRef<HTMLInputElement>(null);
  const inputMainFileRef = React.useRef<HTMLInputElement>(null);

  const [mainImage, setMainImage] = React.useState<FileType | string>(props.mainFileLink);
  const [portfolio, setPortfolio] = React.useState<(FileType | string)[]>(props.portfolioLink);

  // -------------------

  const handleImage: HandleImageType = (file, fieldName) => {
    if (!file) return;

    const isJpg = file.type === "image/jpeg" || file.type === "image/jpg";
    const isPng = file.type === "image/png";
    const isImage = isJpg || isPng;

    if (isImage === false) {
      setError(fieldName, { message: "Возможны только форматы jpg, jpeg, png" });
      return;
    }

    clearErrors(fieldName);
    trigger(fieldName);

    return file;
  }

  const onPortfolioInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0)
    const result = handleImage(file, "portfolio")
    if (result) setPortfolio([...portfolio, result]);
  }

  const onMainImageInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0)
    const result = handleImage(file, "mainFile")
    if (result) setMainImage(result);
  }

  const onAddPortfolioImageClick = () => inputPortfolioFileRef.current?.click();
  const onAddMainImageClick = () => inputMainFileRef.current?.click();

  const onPortfolioImageDelete = (index: number) => setPortfolio(portfolio.filter((_, i) => index !== i));
  const onMainImageDelete = () => setMainImage(null);

  const portfolioFile = register("portfolio", { onChange: onPortfolioInputFileChange });
  const mainFile = register("mainFile", { onChange: onMainImageInputFileChange });
  register("service");

  React.useImperativeHandle(portfolioFile.ref, () => inputPortfolioFileRef.current);
  React.useEffect(() => { setValue("portfolio", portfolio) }, [portfolio]);
  React.useEffect(() => { setValue("mainFile", mainImage) }, [mainImage]);

  const onFormSubmit: SubmitHandler<IArticleFormWithDefaultValue> = async (data) => {
    if (data.mainFile) {
      clearErrors("mainFile")
    } else {
      return setError("mainFile", { message: "Выберите главное изображение" })
    }

    if (data.portfolio.length) {
      clearErrors("portfolio")
    } else {
      return setError("portfolio", { message: "Заполните портфолио" })
    }

    const axiosWithCredentials = axios.create({
      headers:
        { Authorization: `Bearer ${token}` }
    })

    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "portfolio") {
        data.portfolio.forEach(item => formData.append("portfolio", item as File));
      } else if (key === "services") {
        data.services.forEach(item => formData.append("services", item.join("---")));
      } else {
        formData.set(key, value);
      }
    })

    console.log(data);

    try {
      const updateResponse = await axiosWithCredentials.putForm(`${BACKEND_URL}/api/article/${props._id}`, formData);
      props.setIsEditing(false);
      console.log(updateResponse.data);

      const getAllResponse = await axios.get(`${BACKEND_URL}/api/account/article/${ownerId}`)
      dispatch(setArticles(getAllResponse.data.articles))
      console.log(getAllResponse.data);
    } catch (e) {
      const error = e as AxiosError<IResponse>;
      const message = error.response?.data.err;
      if (message) {
        setError("root", { message });
      } else {
        toast.error("Что-то пошло не так...")
      }
      console.warn(message);
    }
  }

  const isError = formState.errors.priceMin?.message
    || formState.errors.priceMax?.message
    || formState.errors.workingDays?.message
    || formState.errors.workingHours?.message
    || formState.errors.phoneNumber?.message
    || formState.errors.description?.message
    || formState.errors.portfolio?.message
    || formState.errors.mainFile?.message
    || formState.errors.services?.message
    || formState.errors.root?.message;

  return {
    handleSubmit,
    register,
    formState,
    setValue,
    setError,
    clearErrors,
    trigger,
    isError,

    inputPortfolioFileRef,
    inputMainFileRef,
    portfolioFile,
    mainFile,
    portfolio,
    mainImage,

    onFormSubmit,
    onAddPortfolioImageClick,
    onAddMainImageClick,
    onPortfolioImageDelete,
    onMainImageDelete,
  }
}

export { useArticleFormWithDefaultValues }