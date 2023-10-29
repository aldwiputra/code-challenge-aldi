import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { GpsData } from '../data/gpsData';
import { createDeviceTypeData } from '../lib';
import { TextWithIcon } from '.';

ChartJS.register(ArcElement, Tooltip, Legend);
export const PieChart = ({ data }: { data: GpsData[] }) => {
  const locationData = createDeviceTypeData(data, 'location');

  console.log(locationData);

  const chartData = {
    labels: Object.keys(locationData),
    datasets: [
      {
        label: 'Total Entries',
        data: Object.keys(locationData).map((key) => locationData[key]),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='mt-12'>
      <div className='w-fit mx-auto mb-6'>
        <TextWithIcon text='Location'>
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
              d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
            />
          </svg>
        </TextWithIcon>
      </div>
      <Pie data={chartData} />;
    </div>
  );
};
