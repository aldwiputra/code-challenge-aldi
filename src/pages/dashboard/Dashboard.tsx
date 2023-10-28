// import TableSkeleton from '../components/TableSkeleton';
// import { UserType } from '../lib/type/userType';
import { Logo, TableRow } from '../../components';
import { gpsData } from '../../data/gpsData';
import { transformDataWithUniqueId } from '../../lib/transformDataWithUniqueId';

export function Dashboard() {
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
                {transformDataWithUniqueId(gpsData).map((data, index) => (
                  <TableRow key={index} data={data} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
