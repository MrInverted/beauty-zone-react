import React from 'react';

import Intro from '../components/intro';
import Categories from '../components/categories';
import Masters from '../components/masters';
import Catalogue from '../components/catalogue';
import Offer from '../components/offer';
import About from '../components/about';
import Card from '../components/card';
import { useAppSelector } from '../redux/store';



function IntroPage() {
  const { isCard } = useAppSelector(store => store.card)

  return <>
    <Intro page='intro' />

    <Categories />

    <Masters />

    <Offer page='index' />

    <Catalogue />

    <About />

    {isCard && <Card />}
  </>;
}

export { IntroPage };