import { VFC } from 'react-transition-group/node_modules/@types/react';

export const SkeletonLoading: VFC = () => {
  return (
    <div className='w-full p-2 border-b border-solid border-black'>
      <div className='animate-pulse flex items-center justify-between'>
        <div className='flex items-center w-3/4'>
          <div className='bg-gray-200 w-10 h-10 sm:w-12 sm:h-12'></div>
          <div className='h-3.5 sm:h-4 bg-gray-200 rounded  w-8/12 sm:w-7/12 ml-2 sm:ml-4'></div>
        </div>
        <div className='flex-col space-y-1 w-1/3 sm:w-1/4 ml-16 sm:ml-5'>
          <div className='h-2.5 sm:h-3 w-1/3 bg-gray-200 rounded mr-0 sm:mr-4'></div>
          <div className='h-2.5 sm:h-3 bg-gray-200 rounded w-10/12'></div>
        </div>
      </div>
    </div>
  );
};
