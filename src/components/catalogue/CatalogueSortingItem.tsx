import React from 'react'
import { IntroSearchBlock } from '../intro/IntroSearchBlock';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { AllServiceType } from '../../utils/catalogue';
import { deleteSortingService, setSortingPrice, setSortingService } from '../../redux/sorting-slice';

interface IInput {
  type: "input";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  list: readonly { russian: string }[];
}

interface IChexboxes {
  type: "chexboxes";
  chexboxes: readonly { russian: string, value: string, checked: boolean }[];
}

interface IRadio {
  type: "radio";
}

type props = {
  title: string
} & (IInput | IChexboxes | IRadio);



function CatalogueSortingItem(props: props) {
  const dispatch = useAppDispatch()
  const { service, price } = useAppSelector(store => store.sorting)
  const [isOpened, setIsOpened] = React.useState(true);

  const setPrice = (inc: { min: number, max: number }) => dispatch(setSortingPrice(inc));

  const onLabelClick = () => setIsOpened(!isOpened);

  const isCheckboxChecked = (inc: AllServiceType) => Boolean(service.find(item => item === inc));
  const onCheckboxClickAdd = (service: string) => dispatch(setSortingService(service));
  const onCheckboxClickDelete = (service: string) => dispatch(deleteSortingService(service));
  const isAddOrDelete = (condition: boolean, service: string) => condition ? onCheckboxClickDelete.bind(null, service) : onCheckboxClickAdd.bind(null, service)

  return (
    <div className="catalogue__sorting-item">
      <div className={`catalogue__sorting-label ${isOpened ? "" : "closed"}`} onClick={onLabelClick}>
        <span>{props.title}</span>
        <img src="/images/catologue-chevron-up.svg" alt="" />
      </div>
      <div className={`catalogue__sorting-input ${isOpened ? "" : "closed"}`}>
        <div className="min-height-0">

          {props.type === "input" && <>
            <IntroSearchBlock title={props.value} setTitle={props.setValue} list={props.list} />
          </>}

          {props.type === "chexboxes" && props.chexboxes &&
            props.chexboxes.map((el) => {
              const isChecked = isCheckboxChecked(el.russian as AllServiceType)

              return <label key={el.russian}>
                <input
                  type="checkbox"
                  name={el.russian}
                  value={el.russian}
                  checked={isChecked}
                  onChange={isAddOrDelete(isChecked, el.russian)}
                />
                <span>{el.russian}</span>
              </label>
            })
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