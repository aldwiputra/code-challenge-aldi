import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LOGGED_IN_USER_KEY } from '../../lib';

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem(LOGGED_IN_USER_KEY);

    if (user) {
      navigate('/');
    }
  }, []);

  return <Outlet />;
};
