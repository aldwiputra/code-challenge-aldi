import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo, Input, Spinner, ErrorToast } from '../../components';
import {
  checkIfUserAlreadyExists,
  checkValidity,
  isValidEmail,
  isValidPassword,
  setJustCreatedUserLocalStorage,
} from '../../lib';
import { UserType } from '../../lib/type/userType';
import { setUserOnLocalStorage } from '../../lib/setUserOnLocalStorage';

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailInputError, setEmailInputError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordInputError, setPasswordInputError] = useState(false);

  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitLoading(true);
    setSubmitError(false);

    const userInput: UserType = {
      email,
      password,
    };

    // check email and password validity
    checkValidity(email, isValidEmail, setEmailInputError);
    checkValidity(password, isValidPassword, setPasswordInputError);

    if (!isValidPassword(password) || !isValidEmail(email)) {
      setSubmitLoading(false);
      return;
    }

    if (checkIfUserAlreadyExists(userInput)) {
      setSubmitError(true);
      setSubmitLoading(false);
      return;
    }

    setUserOnLocalStorage(userInput);

    setTimeout(() => {
      setSubmitLoading(false);
      setJustCreatedUserLocalStorage(email);
      navigate('/login');
    }, 2000);
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
        <Logo />
        {submitError && <ErrorToast message='User with that email already exists' />}
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create your account
            </h1>
            <form onSubmit={submitHandler} className='space-y-4 md:space-y-6'>
              <Input
                label='Your email'
                errorMsg='Has to be a valid email'
                type='email'
                name='email'
                id='email'
                value={email}
                isError={emailInputError}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onBlur={() => {
                  checkValidity(email, isValidEmail, setEmailInputError);
                }}
                placeholder='name@example.com'
              />
              <Input
                label='Password'
                errorMsg='Has to be longer than 6 characters'
                type='password'
                name='password'
                id='password'
                minLength={7}
                value={password}
                isError={passwordInputError}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onBlur={() => {
                  checkValidity(password, isValidPassword, setPasswordInputError);
                }}
                placeholder='••••••••'
              />
              <button
                type='submit'
                disabled={submitLoading}
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                {submitLoading ? <Spinner /> : 'Sign Up'}
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?{' '}
                <Link
                  to='/login'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
