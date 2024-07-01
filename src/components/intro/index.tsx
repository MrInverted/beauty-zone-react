import React from 'react';
import "./intro.scss";
import { allStates, allCities, allServices } from '../../utils/location';

const defaultState = { abbreviation: "NY", english: "Select state", russian: "Выберите штат" };
const defaultCity = { state: "", english: "Select city", russian: "Выберите город" };
const defaultService = { title: "Какая услуга интересует?", imageUrl: "" };

export default function () {
  const [state, setState] = React.useState(defaultState);
  const [city, setCity] = React.useState(defaultCity);
  const [service, setService] = React.useState(defaultService);

  const [isStateOpened, setIsStateOpened] = React.useState(false);
  const [isCityOpened, setIsCityOpened] = React.useState(false);
  const [isServiceOpened, setIsServiceOpened] = React.useState(false);

  return (
    <section className="intro bg-flowers">
      <div className="container">
        <div className="intro__content">
          <h1>Найди своего <span>Beauty</span> мастера поблизости</h1>
          <p>Каталог специалистов в твоем городе</p>
          <form className="intro__search" action="/" method="get">

            <div className="intro__search-block" onClick={() => setIsStateOpened(!isStateOpened)}>
              <span>{state.russian}</span>
              <img className={`${isStateOpened ? "active" : ""}`} src="/images/intro-polygon-down.svg" alt="" />
              <div className={`intro__search-dropdown ${isStateOpened ? "active" : ""}`}>
                <div className="min-height-0">
                  {allStates.map((el) => (
                    <span
                      key={el.english}
                      onClick={() => setState(el)}
                    >
                      {el.russian}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="intro__search-block" onClick={() => setIsCityOpened(!isCityOpened)}>
              <span>{city.russian}</span>
              <img className={`${isCityOpened ? "active" : ""}`} src="/images/intro-polygon-down.svg" alt="" />
              <div className={`intro__search-dropdown ${isCityOpened ? "active" : ""}`}>
                <div className="min-height-0">
                  {allCities
                    .filter(el => el.state === state.abbreviation)
                    .map((el) => (
                      <span
                        key={el.english}
                        onClick={() => setCity(el)}
                      >
                        {el.russian}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="intro__search-block span-2" onClick={() => setIsServiceOpened(!isServiceOpened)}>
              <span>{service.title}</span>
              <img className={`${isServiceOpened ? "active" : ""}`} src="/images/intro-polygon-down.svg" alt="" />
              <div className={`intro__search-dropdown ${isServiceOpened ? "active" : ""}`}>
                <div className="min-height-0">
                  {allServices
                    .map((el) => (
                      <span
                        key={el.title}
                        onClick={() => setService(el)}
                      >
                        {el.title}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="intro__search-button">
              <button className="btn-dark" type="button">
                <img src="/images/intro-button-search.svg" alt="" />
                <span>Поиск</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}



