import { Link, useParams } from 'react-router-dom';
import { gpsData } from '../../data/gpsData';
import { getGpsDataById } from '../../lib';
import { DeviceType, Logo, TextWithIcon, TimestampTable } from '../../components';
import { PieChart } from '../../components/PieChart';

export const Detail = () => {
  const { id } = useParams();
  const data = getGpsDataById(gpsData, id as string);

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center px-6 py-10 mx-auto md:max-w-5xl min-h-screen lg:py-10'>
        <Logo />
        <div className='w-full max-w-lg mt-10'>
          <Link
            to='/'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 mr-2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
            Back
          </Link>
        </div>
        <div className='w-full mt-6 block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <h1 className='text-base font-medium text-white dark:text-slate-200 inline-flex items-center text-center  '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 mr-2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
              />
            </svg>
            Record Details
          </h1>
          <p className='mt-3 text-sm max-w-[48ch] leading-relaxed text-gray-500 dark:text-gray-400'>
            This is the page for gps records with ID: <strong>{id}</strong>. To see more, click this{' '}
            <a
              href='https://shattereddisk.github.io/rickroll/rickroll.mp4'
              className='font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline'>
              Link
            </a>
            . You can thank me later.
          </p>
          <div className='flex justify-between items-center mt-6'>
            <TextWithIcon text={id as string}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-blue-600'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
                />
              </svg>
            </TextWithIcon>

            <DeviceType deviceType={data[0].deviceType} />
          </div>
          <TimestampTable data={data} />
          <PieChart data={data} />
        </div>
      </div>
    </section>
  );
};
