import axios from 'axios';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '../redux/store';
import { BACKEND_URL } from '../data/url';

type FileType = File | null | undefined;

export interface IArticleForm {
  mainFile: FileType;
  priceMin: number;
  priceMax: number;
  workingDays: string;
  workingHours: string;
  phoneNumber: string;
  description: string;
  services: [string, string][];
  portfolio: FileType[];
}

interface IUseArticleForm {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

type HandleImageType = (file: FileType, fieldName: keyof IArticleForm) => FileType | undefined;



function useArticleForm({ setIsEditing }: IUseArticleForm) {
  const { service } = useAppSelector(store => store.addArticle)
  const { token } = useAppSelector(store => store.auth)
  const { handleSubmit, register, formState, setValue, setError, clearErrors, trigger } = useForm<IArticleForm>({ mode: "all" })

  const inputPortfolioFileRef = React.useRef<HTMLInputElement>(null);
  const inputMainFileRef = React.useRef<HTMLInputElement>(null);

  const [mainImage, setMainImage] = React.useState<FileType>();
  const [portfolio, setPortfolio] = React.useState<FileType[]>([]);

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

  React.useImperativeHandle(portfolioFile.ref, () => inputPortfolioFileRef.current);
  React.useEffect(() => { setValue("portfolio", portfolio) }, [portfolio]);
  React.useEffect(() => { setValue("mainFile", mainImage) }, [mainImage]);

  const onFormSubmit: SubmitHandler<IArticleForm> = (data) => {
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
        data.services.forEach(item => formData.append("services", item.join(":::")));
      } else {
        formData.set(key, value);
      }
    })

    formData.set("service", service)

    axiosWithCredentials.postForm(`${BACKEND_URL}/api/article`, formData)
      .then(res => console.log(res.data))
      .then(() => setIsEditing(false))
      .catch(err => console.log(err.response.data));

    console.log(data)
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

export { useArticleForm }