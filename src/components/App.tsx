import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

import Header from '../layouts/header';
import Footer from '../layouts/footer';

import { IntroPage } from '../pages/IntroPage';
import { MasterPage } from '../pages/MasterPage';
import { CataloguePage } from '../pages/CataloguePage';
import { AccountPage } from '../pages/AccountPage';

import { Login } from './modals/Login';
import { Recovery } from './modals/Recovery';
import { Register } from './modals/Register';



function App() {
  const { isLogin, isRegister, isRecovery } = useAppSelector(store => store.modals);

  return <>
    <Header />

    <Routes>
      <Route path='/' element={<IntroPage />} />
      <Route path='/master' element={<MasterPage />} />
      <Route path='/catalogue' element={<CataloguePage />} />
      <Route path='/account' element={<AccountPage />} />
    </Routes>

    <Footer />

    {isLogin && <Login />}
    {isRecovery && <Recovery />}
    {isRegister && <Register />}
  </>;
}

export default App;
