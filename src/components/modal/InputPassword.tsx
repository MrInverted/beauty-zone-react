import React from 'react'

interface IInputPassword {
  register: any
}



function InputPassword({ register }: IInputPassword) {
  const [isPassword, setIsPassword] = React.useState(true)

  return (
    <label>
      <input className="modal__password" type={isPassword ? 'password' : 'text'} placeholder="Пароль" {...register} />

      {isPassword
        ? <img src="/images/modal-eye-closed.svg" alt="" onClick={() => setIsPassword(false)} />
        : <img src="/images/modal-eye-opened.svg" alt="" onClick={() => setIsPassword(true)} />
      }
    </label>
  )
}

export { InputPassword }