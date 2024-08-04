import React from 'react'
import { UseFormRegister, UseFormSetError, UseFormSetValue } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/store';
import { IArticleForm } from '../../../hooks/useArticleForm';

interface IFieldsMore {
  isEditing: boolean;
  register: UseFormRegister<IArticleForm>;
  setValue: UseFormSetValue<IArticleForm>;
  setError: UseFormSetError<IArticleForm>;
}

type ServicesType = [string, string]



function FieldsMore({ isEditing, register, setValue, setError }: IFieldsMore) {
  const dispatch = useAppDispatch()
  const [services, setServices] = React.useState<ServicesType[]>([])

  const onAddServiceClick = () => setServices([...services, ["", ""]])

  const onServiceNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const name = e.target.value;
    setServices(services.map((el, i) => {
      if (i === index) el[0] = name;
      return el;
    }))
  }

  const onServicePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const price = e.target.value;
    setServices(services.map((el, i) => {
      if (i === index) el[1] = price;
      return el;
    }))
  }

  register("services", {
    required: { value: true, message: "Заполните услуги" }
  })

  React.useEffect(() => {
    setServices(services.filter(([name, price]) => name.trim() && price.trim()))
  }, [isEditing])

  React.useEffect(() => {
    setValue('services', services)
  }, [services])

  return (
    <>
      <label>
        <span>Описание</span>
        <textarea
          readOnly={!isEditing}
          placeholder="Напишите о себе или подробнее о предостовляемой услуге.
Пожалуйста, не вводите тут ссылки на соцсети или сайты, номера телефонов."
          {...register("description", {
            required: { value: true, message: "Укажите описание" },
            minLength: { value: 20, message: "Минимальная длина описания 20 символов" }
          })}
        />
      </label>

      <div className="row-service-price">
        <label>
          <span>Услуги</span>
          <div style={{ display: "flex", flexDirection: "column", gap: '10px' }}>
            {services.map((el, index) => (
              <input
                key={index}
                type="text"
                placeholder="Введите название услуги"
                readOnly={!isEditing}
                onChange={(e) => onServiceNameChange(e, index)}
              />
            ))}
          </div>
        </label>

        <label>
          <span>Цена</span>
          <div style={{ display: "flex", flexDirection: "column", gap: '10px' }}>
            {services.map((el, index) => (
              <input
                key={index}
                type="text"
                placeholder="от $100"
                readOnly={!isEditing}
                onChange={(e) => onServicePriceChange(e, index)}
              />
            ))}
          </div>
        </label>

        {isEditing && <p onClick={onAddServiceClick}>+ Добавить строку</p>}
      </div>
    </>
  )
}

export { FieldsMore }