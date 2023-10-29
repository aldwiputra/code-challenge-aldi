import React from 'react';
import { GpsData } from '../data/gpsData';
import { FormattedTime } from './FormattedTime';

export const TimestampTable = ({ data }: { data: GpsData[] }) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-8 border border-slate-200/10'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-2'>
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {data.map((entry: GpsData) => (
            <tr className='border border-slate-200/10'>
              <td className='py-4 text-gray-900 dark:text-slate-300 flex justify-center'>
                <FormattedTime time={entry.timestamp} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
