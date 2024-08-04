import React from 'react'
import { Buttons } from '../Buttons';
import { useAddressForm } from '../../../hooks/useAddressForm';
import { Error } from '../Error';


function Address() {
  const [isEditing, setIsEditing] = React.useState(false);

  const {
    onFormSubmit,
    handleSubmit,
    register,
    isError
  } = useAddressForm({ setIsEditing })

  const onEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => { e.preventDefault(); setIsEditing(true); }
  const onCancelClick = () => setIsEditing(false);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="cabinet__contact-info">
        <div className="cabinet__title">
          <h2>Контактная информация</h2>
          <Buttons {...{ isEditing, onCancelClick, onEditClick }} />
        </div>

        <label>
          <span>Имя</span>
          <input
            type="text"
            readOnly={!isEditing}
            {...register("name", {
              required: { value: true, message: "Укажите имя" },
            })}
          />
        </label>

        <label>
          <span>Фамилия</span>
          <input
            type="text"
            readOnly={!isEditing}
            {...register("surname", {
              required: { value: true, message: "Укажите фамилию" }
            })}
          />
        </label>

        <label>
          <span>E-mail</span>
          <input
            type="text"
            readOnly={!isEditing}
            {...register("email", {
              required: { value: true, message: "Укажите email" }
            })}
          />
        </label>

        <label>
          <span>Штат</span>
          <input
            type="text"
            readOnly={!isEditing}
            {...register("state", {
              required: { value: true, message: "Укажите штат" }
            })}
          />
        </label>

        <label>
          <span>Город</span>
          <input
            type="text"
            readOnly={!isEditing}
            {...register("city", {
              required: { value: true, message: "Укажите город" }
            })}
          />
        </label>

        <div className="row">
          <label style={{ flexGrow: 1, width: "100%" }}>
            <span>Улица</span>
            <input
              type="text"
              readOnly={!isEditing}
              {...register("street", {
                required: { value: true, message: "Укажите улицу" }
              })}
            />
          </label>

          <label className="house">
            <span>Дом</span>
            <input
              type="text"
              readOnly={!isEditing}
              {...register("building", {
                required: { value: true, message: "Укажите дом" }
              })}
            />
          </label>
        </div>

        <Error {...{ isEditing, isError }} />

      </div>
    </form>

  )
}

export { Address }