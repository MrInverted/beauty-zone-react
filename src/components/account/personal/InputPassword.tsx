import React from 'react'

interface IInputPassword {
  register: any;
  placeholder: string;
  span2?: boolean;
  readOnly: boolean;
}



function InputPassword({ register, placeholder, span2, readOnly }: IInputPassword) {
  const [isPassword, setIsPassword] = React.useState(true)

  return (
    <label className={span2 ? "article-password span-2" : "article-password"}>
      <input
        type={isPassword ? 'password' : 'text'}
        placeholder={placeholder}
        readOnly={readOnly}
        {...register}
      />

      {isPassword
        ? <img src="/images/modal-eye-closed.svg" alt="" onClick={() => setIsPassword(false)} />
        : <img src="/images/modal-eye-opened.svg" alt="" onClick={() => setIsPassword(true)} />
      }
    </label>
  )
}

export { InputPassword }