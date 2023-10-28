import { useNavigate } from 'react-router-dom';
import { GpsData } from '../data/gpsData';
import { formatDate, formatTime } from '../lib';

type TableRowPropsType = {
  data: GpsData;
};

export function TableRow({ data }: TableRowPropsType) {
  const { deviceId, deviceType, timestamp, location } = data;
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => {
        navigate(`/${deviceId}`);
      }}
      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {deviceId}
      </td>
      <td className='px-6 py-4'>{deviceType}</td>
      <td className='px-6 py-4 text-gray-900 dark:text-slate-300'>
        {formatDate(timestamp)}{' '}
        <span className='text-xs bg-zinc-500/30 py-1 px-1.5 rounded-md text-gray-900 dark:text-slate-200'>
          {formatTime(timestamp)}
        </span>{' '}
      </td>
      <td className='px-6 py-4 text-center text-gray-900 dark:text-white'>{location}</td>
    </tr>
  );
}
