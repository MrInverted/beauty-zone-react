import React from 'react'
import "./header.scss";
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { removeIsAuth } from '../../redux/auth-slice';



export default function () {
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = React.useState(false);
  const { isAuth } = useAppSelector(store => store.auth);

  const closeBurger = () => setIsOpened(false);

  const onClickBurger = () => setIsOpened(!isOpened);

  const onExitClick = () => {
    dispatch(removeIsAuth());
    setIsOpened(false);

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("ownerId");
  }

  if (isOpened) {
    document.body.classList.add("header-opened");
  } else {
    document.body.classList.remove("header-opened");
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__row">
            <div className="header__logo">
              <Link to="/" onClick={closeBurger}>
                <img src="/images/header-logo.svg" alt="" />
              </Link>
            </div>

            <nav className="header__chooser">
              <NavLink to="/">Я ищу мастера</NavLink>
              <NavLink to="/master">Я - мастер</NavLink>
            </nav>

            <div className="header__login">
              <Link to="/account">
                <img src="/images/header-account.svg" alt="" />
                <span>Личный кабинет</span>
              </Link>

              {isAuth && <Link to="/" onClick={onExitClick}>
                <img src="/images/header-exit.svg" alt="" />
                <span>Выйти</span>
              </Link>}
            </div>

            <div className="header__burger-icon opened" onClick={onClickBurger}>
              {isOpened ? <img src="/images/burger-opened.svg" alt="" /> : <img src="/images/burger-closed.svg" alt="" />}
            </div>
          </div>

          <div className={isOpened ? "header__mobile opened" : 'header__mobile'}>
            <div className="min-height-0">
              <div className="mobile-content">
                <nav className="header__chooser">
                  <NavLink to="/" onClick={closeBurger}>Я ищу мастера</NavLink>
                  <NavLink to="/catalogue" onClick={closeBurger}>Каталог мастеров</NavLink>
                  <NavLink to="/master" onClick={closeBurger}>Я - мастер</NavLink>
                </nav>

                <div className="header__login">
                  <Link to="/account" onClick={closeBurger}>
                    <img src="/images/header-account.svg" alt="" />
                    <span>Личный кабинет</span>
                  </Link>

                  {isAuth && <Link to="/" onClick={onExitClick}>
                    <img src="/images/header-exit.svg" alt="" />
                    <span>Выйти</span>
                  </Link>}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
