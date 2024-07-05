import React from 'react';

import { useAppDispatch } from '../../redux/store';
import { showLoginModal } from '../../redux/modals-slice';



function RegisterThree() {
  const dispatch = useAppDispatch();

  const onSignInClick = () => dispatch(showLoginModal());

  return (<>
    <div className="modal__success">
      <img src="/images/modal-success.svg" alt="" />
      <span>
        Регистрация прошла успешно.
        <br />
        Мы отправили вам на адрес электронной почты Ваши регистрационные данные.
      </span>
    </div>

    <button
      type="submit"
      className="btn-dark"
      onClick={onSignInClick}
      style={{ marginBottom: 0 }}
    >
      Войти
    </button>
  </>)
}

export { RegisterThree }