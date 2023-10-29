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
      className='w-max absolute right-6 top-6 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
      {submitLoading ? <Spinner /> : 'Logout'}
    </button>
  );
};
