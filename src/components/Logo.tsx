import { Link } from 'react-router-dom';
import mainLogo from '/main-logo.svg';

export const Logo = () => {
  return (
    <Link
      to='/'
      className='flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white'>
      <img className='w-8 h-8 mr-2' src={mainLogo} alt='logo' />
      GPScord
    </Link>
  );
};
