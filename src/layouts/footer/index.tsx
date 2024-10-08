import React from 'react'
import "./footer.scss"

import { useAppDispatch } from '../../redux/store'
import { showLoginModal, showRegisterModal } from '../../redux/modals-slice'
import { Link } from 'react-router-dom'



export default function () {
  const dispatch = useAppDispatch()

  const onLoginClick = () => dispatch(showLoginModal());
  const onRegisterClick = () => dispatch(showRegisterModal());

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__row">
            <div className="footer__logo">
              <Link to="/">
                <div className="footer__image">
                  <img src="./images/footer-logo.svg" alt="" />
                </div>
              </Link>

              <a href="#">
                <img src="/images/footer-instagram.svg" alt="" />
              </a>
              <a href="#">
                <img src="/images/footer-telegram.svg" alt="" />
              </a>
            </div>
            <div className="footer__pages">
              <dl>
                <dt>Меню</dt>
                <dd>
                  <Link to="/catalogue">Каталог мастеров</Link>
                  <Link to="/master">Тарифы на размещение</Link>
                </dd>
              </dl>
              <dl>
                <dt>Аккаунт</dt>
                <dd>
                  <div onClick={onLoginClick}>
                    <img src="/images/footer-account.svg" alt="" />
                    <span>Вход</span>
                  </div>
                  <div onClick={onRegisterClick}>Регистрация</div>
                </dd>
              </dl>
              <dl>
                <dt>Контакты</dt>
                <dd>
                  <a href="#">+ 1 XXX-XXX-XXXX</a>
                  <a href="#">beautyzone@gmail.com </a>
                </dd>
              </dl>
            </div>
          </div>
          <div className="footer__sub">
            <p>
              <span>© 2023</span>
              <span>Beauty</span>
              <span>Zone</span>
            </p>
            <a href="#">Политика конфидициальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
