import { IArticleModel } from '../../data/models'
import { BACKEND_URL } from '../../data/url'
type Props = IArticleModel & { onClick: () => void }



function MastersCardPreview(props: Props) {
  return (
    <article className={props.isPremium ? 'masters__item masters__premium' : 'masters__item'} onClick={props.onClick}>
      <div className="masters__category">
        {props.service}
      </div>

      <div className="masters__image">
        <img src={`${BACKEND_URL}${props.mainFileLink}`} alt="" />
      </div>

      <div className="masters__main">
        <div className="masters__name">
          <h3>{props.ownerId?.name}</h3>

          {props.isPremium && props.rating > 0 && <>
            <div className="masters__rating">
              <img src="/images/masters-rating-star-filled.svg" alt="" />
              <span>{props.rating}</span>
            </div>
          </>}
        </div>

        <div className="masters__price">${props.priceMin}-{props.priceMax}</div>

        <p className="masters__text">{props.description}</p>

        <div className="masters__info">
          <img src="/images/masters-time.svg" alt="" />
          <span>{props.workingDays}: {props.workingHours}</span>
        </div>

        <div className="masters__info">
          <img src="/images/masters-location.svg" alt="" />
          <span>{props.ownerId?.state}, {props.ownerId?.city}</span>
        </div>

        {props.isPremium && <div className="masters__label">Топ</div>}
      </div>
    </article>
  )
}

export { MastersCardPreview }