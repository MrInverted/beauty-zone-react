import React from 'react'
import Catalogue from '../components/catalogue'
import Card from '../components/card'
import { useAppSelector } from '../redux/store'

function CataloguePage() {
  const { isCard } = useAppSelector(store => store.card)

  return (<>
    <Catalogue />

    {isCard && <Card />}
  </>)
}

export { CataloguePage }