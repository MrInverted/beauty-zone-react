import React from 'react'
import "./header.scss";
import { Link, NavLink } from 'react-router-dom';



export default function () {
  const [isOpened, setIsOpened] = React.useState(false);

  const onClickBurger = () => {
    if (isOpened) {
      document.body.classList.remove("header-opened");
    } else {
      document.body.classList.add("header-opened");
    }

    setIsOpened(!isOpened);
  }

  const onAddACardClick = () => {
    // link to account
  }

  const onPersonalAreaClick = () => {
    // link to account
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__row">
            <div className="header__logo">
              <Link to="/">
                <img src="/images/header-logo.svg" alt="" />
              </Link>
            </div>

            <nav className="header__chooser">
              <NavLink to="/" >Я ищу мастера</NavLink>
              <NavLink to="/master" >Я - мастер</NavLink>
            </nav>

            <div className="header__login">
              <Link to="/account" className="btn-dark" onClick={onAddACardClick}>Добавить объявление</Link>

              <Link to="/account" onClick={onPersonalAreaClick}>
                <img src="/images/header-account.svg" alt="" />
                <span>Личный кабинет</span>
              </Link>
            </div>

            <div className="header__burger-icon opened" onClick={onClickBurger}>
              {isOpened ? <img src="/images/burger-opened.svg" alt="" /> : <img src="/images/burger-closed.svg" alt="" />}
            </div>
          </div>

          <div className={isOpened ? "header__mobile opened" : 'header__mobile'}>
            <div className="min-height-0">
              <div className="mobile-content">
                <nav className="header__chooser">
                  <NavLink to="/">Я ищу мастера</NavLink>
                  <NavLink to="/catalogue">Каталог мастеров</NavLink>
                  <NavLink to="/master" className="">Я - мастер</NavLink>
                </nav>

                <div className="header__login">
                  <Link to="/account" className="btn-dark" onClick={onAddACardClick}>Добавить объявление</Link>

                  <Link to="/account" onClick={onPersonalAreaClick}>
                    <img src="/images/header-account.svg" alt="" />
                    <span>Личный кабинет</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
