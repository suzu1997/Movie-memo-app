import Link from 'next/link';
import { memo } from 'react';

export const AddButton = memo((props) => {
  return (
    <>
      <Link href='/edit'>
        <button className='text-center leading-10 text-white bg-green-700 text-4xl font-bold rounded-full focus:outline-none w-14 h-14 fixed right-10 bottom-10 hover:bg-green-800 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 mx-auto'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
      </Link>
    </>
  );
});
