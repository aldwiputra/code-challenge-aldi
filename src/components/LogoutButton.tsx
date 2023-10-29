import { useState } from 'react';
import { LOGGED_IN_USER_KEY } from '../lib';
import { Spinner } from '.';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        setSubmitLoading(true);
        localStorage.removeItem(LOGGED_IN_USER_KEY);

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }}
      type='submit'
      disabled={submitLoading}
      className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
      {submitLoading ? <Spinner /> : 'Logout'}
    </button>
  );
};
