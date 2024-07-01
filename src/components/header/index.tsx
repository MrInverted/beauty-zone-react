import React from 'react'
import "./header.scss";

export default function () {
  const [isOpened, setIsOpened] = React.useState(false);

  const onClickBurger: React.MouseEventHandler<HTMLDivElement> = () => {
    if (isOpened) {
      document.body.classList.remove("header-opened");
    } else {
      document.body.classList.add("header-opened");
    }

    setIsOpened(!isOpened);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__row">
            <div className="header__logo">
              <a href="/">
                <img src="/images/header-logo.svg" alt="" />
              </a>
            </div>

            <nav className="header__chooser">
              <a href="/" className="active">Я ищу мастера</a>
              <a href="/master" className="">Я - мастер</a>
            </nav>

            <div className="header__login">
              <a href="#" className="login-trigger btn-dark">Добавить объявление</a>
              <a href="#" className="login-trigger">
                <img src="/images/header-account.svg" alt="" />
                <span>Личный кабинет</span>
              </a>
            </div>

            <div className={`header__burger-icon ${isOpened ? "opened" : ''}`} onClick={onClickBurger}>
              <img src="/images/burger-closed.svg" alt="" />
              <img src="/images/burger-opened.svg" alt="" />
            </div>
          </div>

          <div className={`header__mobile ${isOpened ? "opened" : ''}`}>
            <div className="min-height-0">
              <div className="mobile-content">
                <nav className="header__chooser">
                  <a href="/" className="active">Я ищу мастера</a>
                  <a href="/catalogue">Каталог мастеров</a>
                  <a href="/master" className="">Я - мастер</a>
                </nav>

                <div className="header__login">
                  <a href="#" className="login-trigger btn-dark">Добавить объявление</a>
                  <a href="#" className="login-trigger">
                    <img src="/images/header-account.svg" alt="" />
                    <span>Личный кабинет</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
