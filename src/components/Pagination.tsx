import { HTMLAttributes } from 'react';
import { GpsData } from '../data/gpsData';
import { useLocation, useNavigate } from 'react-router-dom';

type PaginationPropType = HTMLAttributes<HTMLElement> & { data: GpsData[]; activePage: number };

export const Pagination = ({ data, ...props }: PaginationPropType) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const page = Number(new URLSearchParams(search).get('page'));
  const totalPage = Math.ceil(data.length / 5);

  return (
    <nav aria-label='Page navigation example' {...props}>
      <ul className='flex justify-center -space-x-px text-base h-10'>
        <li>
          <button
            onClick={() => {
              navigate(`/?page=${page - 1}`);
            }}
            disabled={page === 1}
            className='flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Previous
          </button>
        </li>
        {Array(totalPage)
          .fill(' ')
          .map((_item, index) => (
            <li>
              <button
                onClick={() => {
                  navigate(`/?page=${index + 1}`);
                }}
                disabled={page === index + 1}
                className={`flex items-center justify-center px-4 h-10 border border-gray-300 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  page === index + 1
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 '
                    : 'bg-whites dark:bg-gray-800 '
                } `}>
                {index + 1}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() => {
              navigate(`/?page=${page + 1}`);
            }}
            disabled={page === totalPage}
            className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
