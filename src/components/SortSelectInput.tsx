import { SetStateAction } from 'react';
import { GpsData, gpsData, keysData } from '../data/gpsData';

type SortSelectProps = {
  sortBy: keyof GpsData;
  setSortBy: React.Dispatch<SetStateAction<keyof GpsData>>;
};

export const SortSelectInput = ({ sortBy, setSortBy }: SortSelectProps) => {
  return (
    <div className='flex items-center w-fit'>
      <label
        htmlFor='countries'
        className='block mb-2 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        Sort By
      </label>
      <select
        id='sorting'
        onChange={(e) => setSortBy(e.target.value as keyof GpsData)}
        value={sortBy}
        className='bg-gray-50 border ml-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        {Object.keys(gpsData[0]).map((key) => {
          return (
            <option key={key} value={key}>
              {keysData[key as keyof (typeof gpsData)[0]].name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
