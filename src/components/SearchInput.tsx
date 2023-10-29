import { SetStateAction, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type SearchInputProps = {
  setSearchString: React.Dispatch<SetStateAction<string>>;
};

export const SearchInput = ({ setSearchString }: SearchInputProps) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { search: searchParams } = useLocation();

  return (
    <form
      className='md:w-80 md:ml-6 mt-6 md:mt-0'
      onSubmit={(e) => {
        e.preventDefault();

        setSearchString(search);

        const query = new URLSearchParams(searchParams).get('page');
        console.log(query);
        if (query && +query > 1) navigate('/?page=1');
      }}>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'>
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Search Device Id or Type'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type='submit'
          className='text-white absolute right-2 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Search
        </button>
      </div>
    </form>
  );
};
