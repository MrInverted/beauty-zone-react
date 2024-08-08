import Categories from '../components/categories';
import Offer from '../components/offer';
import About from '../components/about'
import Intro from '../components/intro';
import Advantages from '../components/advantages';
import Plans from '../components/plans';

function MasterPage() {
  return (<>
    <Intro page='master' />

    <Advantages />

    <Categories />

    <Plans />

    <Offer page='master' />

    <About />

  </>)
}

export { MasterPage }