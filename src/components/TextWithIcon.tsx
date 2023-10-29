import { HTMLAttributes } from 'react';

export const TextWithIcon = ({
  text,
  children,
  ...props
}: HTMLAttributes<HTMLElement> & { text: string }) => {
  return (
    <div className='flex w-fit -space-x-px text-sm font-medium h-10' {...props}>
      <div className='flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
        {children}
      </div>
      <div className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
        {text}
      </div>
    </div>
  );
};
