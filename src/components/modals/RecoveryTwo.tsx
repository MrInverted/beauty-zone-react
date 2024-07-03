import React from 'react'

interface IRecovery {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}



function RecoveryTwo({ setStep }: IRecovery) {

  return (<>
    <div className="modal__success">
      <img src="/images/modal-success.svg" alt="" />
      <span>На ваш адрес электронной почты было отправлено письмо с инструкциями по восстановлению пароля.</span>
    </div>

    <button
      type="submit"
      className="btn-dark"
      onClick={() => setStep(3)}
      style={{ marginBottom: 0 }}
    >
      Далее
    </button>
  </>)
}

export { RecoveryTwo }