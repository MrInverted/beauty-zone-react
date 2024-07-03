import React from 'react'

interface IIntroSearchBlock {
  title: string;
  list: any[];
  setTitle: React.Dispatch<React.SetStateAction<any>>
  span2?: boolean;
}



function IntroSearchBlock({ title, setTitle, list, span2 }: IIntroSearchBlock) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <div className={`intro__search-block ${span2 ? 'span-2' : ''}`} onClick={() => setIsOpened(!isOpened)}>
      <span>{title}</span>
      <img className={isOpened ? "active" : ""} src="/images/intro-polygon-down.svg" alt="" />
      <div className={`intro__search-dropdown ${isOpened ? "active" : ""}`}>
        <div className="min-height-0">
          {list.map((el, index) => (
            <span
              key={index}
              onClick={() => setTitle(el)}
            >
              {el.russian}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export { IntroSearchBlock }
