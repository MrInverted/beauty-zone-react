import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type FileType = File | null | undefined;

interface IForm {
  priceMin: number;
  priceMax: number;
  workingDays: string;
  workingHours: string;
  phoneNumber: string;
  description: string;
  file: FileType;
  mainFile: FileType;
}

interface IUseArticleForm {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

type HandleImageType = (file: FileType, fieldName: keyof IForm) => string | undefined;



function useArticleForm({ setIsEditing }: IUseArticleForm) {
  const { handleSubmit, register, formState, setValue, setError, clearErrors, trigger } = useForm<IForm>({ mode: "all" })

  const inputPortfolioFileRef = React.useRef<HTMLInputElement>(null);
  const inputMainFileRef = React.useRef<HTMLInputElement>(null);

  const [mainFileUrl, setMainFileUrl] = React.useState("");
  const [portfolio, setPortfolio] = React.useState<string[]>([]);

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
    setValue(fieldName, file);
    trigger(fieldName);

    const src = URL.createObjectURL(file);

    return src;
  }

  const onPortfolioInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0)
    const src = handleImage(file, "file")
    if (src) setPortfolio([...portfolio, src]);
  }

  const onMainImageInputFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.item(0)
    const src = handleImage(file, "mainFile")
    if (src) setMainFileUrl(src);
  }

  const onFormSubmit: SubmitHandler<IForm> = (data) => {
    setIsEditing(false)
    console.log(data)
  }

  const onAddPortfolioImageClick = () => {
    inputPortfolioFileRef.current?.click()
  }

  const onAddMainImageClick = () => {
    inputMainFileRef.current?.click()
  }

  const onPortfolioImageDelete = (index: number) => {
    setPortfolio(portfolio.filter((_, i) => index !== i))
  }

  const onMainImageDelete = () => {
    setMainFileUrl("")
  }

  const portfolioFile = register("file", { onChange: onPortfolioInputFileChange });
  const mainFile = register("mainFile", { onChange: onMainImageInputFileChange });

  React.useImperativeHandle(portfolioFile.ref, () => inputPortfolioFileRef.current);

  const isError = formState.errors.priceMin?.message
    || formState.errors.priceMax?.message
    || formState.errors.workingDays?.message
    || formState.errors.workingDays?.message
    || formState.errors.phoneNumber?.message
    || formState.errors.description?.message
    || formState.errors.file?.message
    || formState.errors.mainFile?.message
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
    mainFileUrl,

    onFormSubmit,
    onAddPortfolioImageClick,
    onAddMainImageClick,
    onPortfolioImageDelete,
    onMainImageDelete,
  }
}

export { useArticleForm }