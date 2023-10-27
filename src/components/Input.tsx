import { InputHTMLAttributes } from 'react';

type addedInputProps = {
  label: string;
  errorMsg: string;
  isError: boolean;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & addedInputProps;

export const Input = ({ label, errorMsg, isError, ...props }: InputProps) => {
  return (
    <div>
      <label
        htmlFor='email'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        {...props}
      />
      {isError && <p className='mt-2 text-sm text-red-600 dark:text-red-500'>*{errorMsg}</p>}
    </div>
  );
};
