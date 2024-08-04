import React from 'react'
import { InputPassword } from './InputPassword'
import { Buttons } from '../Buttons';
import { usePasswordForm } from '../../../hooks/usePasswordForm';
import { Error } from '../Error';





function Password() {
  const [isEditing, setIsEditing] = React.useState(false);

  const onEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => { e.preventDefault(); setIsEditing(true); }
  const onCancelClick = () => setIsEditing(false);

  const {
    onFormSubmit,
    handleSubmit,
    register,
    isError,
    onRepeatedPasswordChange
  } = usePasswordForm({ setIsEditing })

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="cabinet__password">
        <div className="cabinet__title">
          <h2>Сменить пароль</h2>
          <Buttons {...{ isEditing, onEditClick, onCancelClick }} />
        </div>

        <InputPassword placeholder='Старый пароль' span2={true} readOnly={!isEditing} register={register("oldPassword", {
          required: { value: true, message: "Укажите старый пароль" }
        })} />

        <InputPassword placeholder='Новый пароль' readOnly={!isEditing} register={register("newPassword", {
          required: { value: true, message: "Укажите новый пароль" },
          onChange: onRepeatedPasswordChange
        })} />

        <InputPassword placeholder='Повторите новый пароль' readOnly={!isEditing} register={register("newPasswordRepeated", {
          required: { value: true, message: "Повторите новый пароль", },
          onChange: onRepeatedPasswordChange
        })} />

        <Error {...{ isEditing, isError }} />
      </div>
    </form>
  )
}

export { Password }