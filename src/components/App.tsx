import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { Toaster } from 'react-hot-toast';

import Header from '../layouts/header';
import Footer from '../layouts/footer';

import { IntroPage } from '../pages/IntroPage';
import { MasterPage } from '../pages/MasterPage';
import { CataloguePage } from '../pages/CataloguePage';
import { AccountPage } from '../pages/AccountPage';

import { Login } from './modals/Login';
import { Recovery } from './modals/Recovery';
import { Register } from './modals/Register';

import { useToAccount } from '../hooks/useToAccount';



function App() {
  const { isLogin, isRegister, isRecovery } = useAppSelector(store => store.modals);
  const { isAuth } = useToAccount();

  return <>
    <Header />

    <Routes>
      <Route index element={<IntroPage />} />
      <Route path='/master' element={<MasterPage />} />
      <Route path='/catalogue' element={<CataloguePage />} />
      <Route path='/account' element={isAuth ? <AccountPage /> : <IntroPage />} />
    </Routes>

    <Footer />

    {isLogin && <Login />}
    {isRecovery && <Recovery />}
    {isRegister && <Register />}

    <Toaster position='bottom-right' />
  </>;
}

export default App;
