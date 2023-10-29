import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LOGGED_IN_USER_KEY } from '../../lib';

export const ProtectedLayout = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem(LOGGED_IN_USER_KEY);

    if (!user) {
      navigate('/login');
    }

    setShow(true);
  }, []);

  return show && <Outlet />;
};
