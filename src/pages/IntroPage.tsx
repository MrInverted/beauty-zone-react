import React from 'react';

import Intro from '../components/intro';
import Categories from '../components/categories';
import Masters from '../components/masters';
import Catalogue from '../components/catalogue';
import About from '../components/about';
import Card from '../components/card';
import { useAppSelector } from '../redux/store';



function IntroPage() {
  const { isCard } = useAppSelector(store => store.card)

  return <>
    <Intro />

    <Categories />

    <Masters />

    <Catalogue />

    <About />

    {isCard && <Card />}
  </>;
}

export { IntroPage };