import { useEffect, useState } from 'react';
import { Logo, Pagination, SearchInput, SortSelectInput, TableRow } from '../../components';
import { GpsData, gpsData, createSortStringFunc, keysData } from '../../data/gpsData';
import { transformDataWithUniqueId } from '../../lib';
import { useLocation, useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(search).get('page');
  const page = query ? +query : 1;
  const [sortBy, setSortBy] = useState<keyof GpsData>('deviceId');
  const [searchString, setSearchString] = useState('');

  const totalShownEntries = 5;
  const gpsDataWithUniqueId = transformDataWithUniqueId(gpsData);

  gpsDataWithUniqueId.sort(
    createSortStringFunc(sortBy, sortBy === 'timestamp' ? Date.parse : undefined)
  );

  const filteredData = gpsDataWithUniqueId.filter(
    (item) =>
      item.deviceId.toLowerCase().includes(searchString.trim()) ||
      item.deviceType.toLowerCase().includes(searchString.trim())
  );

  const paginatedData = filteredData.slice(
    totalShownEntries * (page - 1),
    totalShownEntries * page
  );

  useEffect(() => {
    const totalPage = Math.ceil(gpsDataWithUniqueId.length / 5);

    if (!query) {
      navigate('/?page=1');
    } else {
      if (+query > totalPage) navigate('/?page=2');
      if (+query < 1) navigate('/?page=1');
    }
  }, [search]);

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center px-6 py-10 mx-auto md:min-h-screen lg:py-10'>
        <Logo />
        <div className='flex justify-between items-center w-full mt-10 md:max-w-5xl'>
          <SortSelectInput sortBy={sortBy} setSortBy={setSortBy} />
          <SearchInput setSearchString={setSearchString} />
        </div>
        <div className='w-full mt-6 sm:max-w-5xl text-gray-900 dark:text-white'>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  {Object.keys(gpsData[0]).map((key) => (
                    <th scope='col' className='px-6 py-2'>
                      {keysData[key as keyof GpsData].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((data, index) => (
                  <TableRow key={index} data={data} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination className='mt-8 text-center' data={filteredData} />
        </div>
      </div>
    </section>
  );
}
