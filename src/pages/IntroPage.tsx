import React from 'react';

import Intro from '../components/intro';
import Categories from '../components/categories';
import Masters from '../components/masters';
import Catalogue from '../components/catalogue';
import About from '../components/about';



function IntroPage() {

  return <>
    <Intro />

    <Categories />

    <Masters />

    <Catalogue />

    <About />
  </>;
}

export { IntroPage };