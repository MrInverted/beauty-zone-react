import React from 'react';

import { useAppDispatch } from '../../redux/store';
import { showLoginModal } from '../../redux/modals-slice';



function RecoveryFour() {
  const dispatch = useAppDispatch();

  const onSignInClick = () => dispatch(showLoginModal());

  return (<>
    <div className="modal__success">
      <img src="/images/modal-success.svg" alt="" />
      <span>Пароль был успешно изменен</span>
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

export { RecoveryFour }