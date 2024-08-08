import React from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { showLoginModal } from '../redux/modals-slice';
import { setIsAuth } from '../redux/auth-slice';
import { setPersonalInfo } from '../redux/account-slice';
import { BACKEND_URL } from '../data/url';



function useToAccount() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(store => store.auth);
  const [isVerified, setIsVerified] = React.useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  if (isVerified === false) {
    axios.post(`${BACKEND_URL}/api/auth/verify`, { token })
      .then(success => {
        if (success.data?.token === token) {
          const authPayload = {
            token: success.data.token,
            ownerId: success.data.id
          }

          dispatch(setIsAuth(authPayload));
          dispatch(setPersonalInfo(success.data?.info));
        }
      })
      .catch(err => console.log(err.response?.data))
      .finally(() => setIsVerified(true));
  }

  React.useEffect(() => {
    const isAccountPathName = (pathname === "/account");

    if (isAccountPathName === false) return;
    if (isVerified === false) return;
    if (isAuth === true) return;

    navigate("/");
    dispatch(showLoginModal());
  }, [isAuth, navigate])

  return { isAuth }
}

export { useToAccount }