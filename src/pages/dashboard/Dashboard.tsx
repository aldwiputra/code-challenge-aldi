import { useEffect, useState } from 'react';
import { Logo, Pagination, TableRow } from '../../components';
import { GpsData, gpsData } from '../../data/gpsData';
import { transformDataWithUniqueId } from '../../lib';
import { useLocation, useNavigate } from 'react-router-dom';

const keysData = {
  deviceId: {
    name: 'Device Id',
    sorterFunc: (a: GpsData, b: GpsData) => (a.deviceId > b.deviceId ? 1 : -1),
  },
  deviceType: {
    name: 'Device Type',
    sorterFunc: (a: GpsData, b: GpsData) => (a.deviceType > b.deviceType ? 1 : -1),
  },
  timestamp: {
    name: 'Timestamp',
    sorterFunc: (a: GpsData, b: GpsData) =>
      Date.parse(a.timestamp) > Date.parse(b.timestamp) ? 1 : -1,
  },
  location: {
    name: 'Location',
    sorterFunc: (a: GpsData, b: GpsData) => (a.location > b.location ? 1 : -1),
  },
};

export function Dashboard() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<keyof GpsData>('deviceId');

  const totalShownEntries = 5;
  const dataWithUniqueId = transformDataWithUniqueId(gpsData);

  dataWithUniqueId.sort(keysData[sortBy].sorterFunc);

  const paginatedData = dataWithUniqueId.slice(
    totalShownEntries * (page - 1),
    totalShownEntries * page
  );

  useEffect(() => {
    const query = new URLSearchParams(search).get('page');
    const totalPage = Math.ceil(dataWithUniqueId.length / 5);

    if (!query) {
      navigate('/?page=1');
    } else {
      if (+query > totalPage) navigate('/?page=2');
      if (+query < 1) navigate('/?page=1');
      setPage(+query);
    }
  }, [search]);

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center px-6 py-10 mx-auto md:min-h-screen lg:py-10'>
        <Logo />
        <div className='flex items-center mt-10 w-fit'>
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
              return <option value={key}>{keysData[key as keyof (typeof gpsData)[0]].name}</option>;
            })}
          </select>
        </div>
        <div className='w-full mt-6 sm:max-w-5xl text-gray-900 dark:text-white'>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Device Id
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Device Type
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Timestamp
                  </th>
                  <th scope='col' className='px-6 py-3 text-center'>
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((data, index) => (
                  <TableRow key={index} data={data} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination className='mt-8 text-center' data={dataWithUniqueId} activePage={page} />
        </div>
      </div>
    </section>
  );
}
