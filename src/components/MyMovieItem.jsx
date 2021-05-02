import Link from 'next/link';
import { memo } from 'react';

export const MyMovieItem = memo((props) => {
  const { myMovie } = props;

  return (
    <Link href={`/movie-note/${myMovie.title}`}>
      <div className='flex items-center justify-between p-2 border-b border-solid border-black cursor-pointer hover:bg-gray-100'>
        <div className='flex items-center'>
          <img
            src={myMovie.src}
            alt='映画のサムネイル'
            className='w-10 h-10 sm:w-12 sm:h-12'
          />
          <p className='text-sm ml-2 mr-1 break-words sm:ml-4 sm:text-base'>{myMovie.title}</p>
        </div>
        <div className='flex items-center'>
          <div className='text-xs sm:text-sm sm:mr-4 whitespace-nowrap'>
            <div>鑑賞日:</div>
            <div>{`${myMovie.year}年${myMovie.month}月${myMovie.day}日`}</div>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 sm:h-6 sm:w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      </div>
    </Link>
  );
});
