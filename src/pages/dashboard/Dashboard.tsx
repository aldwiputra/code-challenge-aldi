import { useEffect, useState } from 'react';
import { Logo, Pagination, TableRow } from '../../components';
import { gpsData } from '../../data/gpsData';
import { transformDataWithUniqueId } from '../../lib';
import { useLocation, useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);

  const totalShownEntries = 5;
  const dataWithUniqueId = transformDataWithUniqueId(gpsData);
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
        <div className='w-full sm:max-w-5xl text-gray-900 dark:text-white'>
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
