import React from 'react'

interface IInput {
  type: "input";
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface IChexboxes {
  type: "chexboxes";
  chexboxes: { service: string, value: string, checked: boolean }[];
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

interface IRadio {
  type: "radio";
}

type props = {
  title: string
} & (IInput | IChexboxes | IRadio);



function CatalogueSortingItem(props: props) {
  const [isOpened, setIsOpened] = React.useState(true);
  const [price, setPrice] = React.useState({ min: 0, max: 0 })

  const onLabelClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpened(!isOpened)
  }

  const onCheckboxClick = (service: string) => {
    if (props.type !== "chexboxes") return;

    props.setValue(props.chexboxes.map(el => {
      if (el.service === service) el.checked = !el.checked;
      return el;
    }))
  }

  return (
    <div className="catalogue__sorting-item">
      <div className={`catalogue__sorting-label ${isOpened ? "" : "closed"}`} onClick={onLabelClick}>
        <span>{props.title}</span>
        <img src="/images/catologue-chevron-up.svg" alt="" />
      </div>
      <div className={`catalogue__sorting-input ${isOpened ? "" : "closed"}`}>
        <div className="min-height-0">

          {props.type === "input" && <>
            <input
              type="text"
              placeholder={props.placeholder}
              value={props.value}
              onChange={(e) => props.setValue(e.target.value)}
            />
          </>}

          {props.type === "chexboxes" && props.chexboxes &&
            props.chexboxes.map((el) => (
              <label key={el.service}>
                <input
                  type="checkbox"
                  name={el.service}
                  value={el.service}
                  checked={el.checked}
                  onChange={onCheckboxClick.bind(null, el.service)}
                />
                <span>{el.service}</span>
              </label>
            ))
          }

          {props.type === "radio" && <>
            <label>
              <input type="radio" name="price" onChange={() => setPrice({ min: 0, max: 25 })} />
              <span>Ниже $25</span>
            </label>
            <label>
              <input type="radio" name="price" onChange={() => setPrice({ min: 25, max: 50 })} />
              <span>$25 - $50</span>
            </label>
            <label>
              <input type="radio" name="price" onChange={() => setPrice({ min: 50, max: 100 })} />
              <span>$50 - $100</span>
            </label>
            <label>
              <input type="radio" name="price" />
              <span>
                <input
                  type="text"
                  placeholder="$ Min"
                  value={price.min.toString()}
                  onChange={(e) => setPrice({ ...price, min: parseInt(e.target.value) || 0 })}
                />
                –
                <input
                  type="text"
                  placeholder="$ Max"
                  value={price.max.toString()}
                  onChange={(e) => setPrice({ ...price, max: parseInt(e.target.value) || 0 })}
                />
              </span>
            </label>
          </>}
        </div>
      </div>
    </div>
  )
}

export { CatalogueSortingItem }