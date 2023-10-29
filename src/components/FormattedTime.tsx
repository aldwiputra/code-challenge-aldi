import { formatDate, formatTime } from '../lib';

export const FormattedTime = ({ time }: { time: string }) => {
  return (
    <>
      {formatDate(time)}
      <span className='text-xs bg-green-500/20 ml-1.5 py-1 px-1.5 rounded-md text-gray-900 dark:text-slate-200'>
        {formatTime(time)}
      </span>
    </>
  );
};
