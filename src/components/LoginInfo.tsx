import { INITIAL_USER_DATA } from '../lib';

export const LoginInfo = () => {
  return (
    <div
      id='toast-interactive'
      className='w-96 bottom-5 left-5 fixed max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400'
      role='alert'>
      <div className='flex'>
        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200'>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z' />
          </svg>
          <span className='sr-only'>Warning icon</span>
        </div>
        <div className='ml-3 text-sm font-normal'>
          <span className='mb-2 block text-sm font-semibold text-gray-900 dark:text-white'>
            Login Data
          </span>
          <div className='mb-1 text-sm font-normal'>
            Email: <strong className='text-gray-300'>{INITIAL_USER_DATA.email}</strong>
          </div>
          <div className='mb-1 text-sm font-normal'>
            Pass: <strong className='text-gray-300'>{INITIAL_USER_DATA.password}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
