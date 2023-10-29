import { useNavigate } from 'react-router-dom';
import { GpsData } from '../data/gpsData';
import { FormattedTime } from './FormattedTime';

type TableRowPropsType = {
  data: GpsData;
};

export function TableRow({ data }: TableRowPropsType) {
  const { deviceId, deviceType, timestamp, location } = data;
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => {
        navigate(`/entries/${deviceId}`);
      }}
      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700'>
      <td
        scope='row'
        className='px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {deviceId}
      </td>
      <td className='px-6 py-6'>
        <span
          className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded ${
            deviceType === 'Aircraft'
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
              : deviceType === 'Personal'
              ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
              : 'bg-red-100 text-red-800  dark:bg-red-900 dark:text-red-300'
          }`}>
          {deviceType}
        </span>
      </td>
      <td className='px-6 py-6 text-gray-900 dark:text-slate-300'>
        <FormattedTime time={timestamp} />
      </td>
      <td className='px-6 py-6 text-center text-gray-900 dark:text-white'>{location}</td>
    </tr>
  );
}
