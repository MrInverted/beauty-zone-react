import React from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface IFields {
  isEditing: boolean;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
}

function Fields({ isEditing, register, setValue }: IFields) {
  return (
    <div className="cabinet__article-right">
      <label>
        <span>Диапазон цен</span>
        <span className="min-max">
          <input
            type="text"
            readOnly={!isEditing}
            placeholder="$ Min"
            {...register("priceMin", {
              required: { value: true, message: "Укажите минимальную цену" },
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue("priceMin", parseInt(e.target.value) || 0),
            })}
          />
          –
          <input
            type="text"
            readOnly={!isEditing}
            placeholder="$ Max"
            {...register("priceMax", {
              required: { value: true, message: "Укажите максимальную цену" },
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue("priceMax", parseInt(e.target.value) || 0),
            })}
          />
        </span>
      </label>

      <label>
        <span>Рабочие дни</span>
        <input
          type="text"
          readOnly={!isEditing}
          placeholder="Пн-Пт"
          {...register("workingDays", {
            required: { value: true, message: "Укажите рабочие дни" },
          })}
        />
      </label>

      <label>
        <span>Рабочие часы</span>
        <input
          type="text"
          readOnly={!isEditing}
          placeholder="8.00-18.00"
          {...register("workingHours", {
            required: { value: true, message: "Укажите рабочие часы" },
          })}
        />
      </label>

      <label className="mb-0">
        <span>Контактный номер</span>
        <input
          type="text"
          readOnly={!isEditing}
          placeholder="Введите номер для связи с клиентами"
          {...register("phoneNumber", {
            required: { value: true, message: "Укажите телефон" },
          })}
        />
      </label>
    </div>
  )
}

export { Fields }