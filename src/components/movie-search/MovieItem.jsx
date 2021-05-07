import Link from 'next/link';
import { memo } from 'react';
import { useSelectMovie } from 'src/hooks/useSelectMovie';

export const MovieItem = memo((props) => {
  const { setSelectedMovie } = useSelectMovie();

  const { movie } = props;
  const selectMovie = () => {
    setSelectedMovie(movie);
  };

  const releaseYear = movie.release_date.slice(0, 4);

  return (
    <Link href='/movie-work'>
      <div
        className='flex items-center justify-between px-3 py-2 border-b border-solid border-black cursor-pointer hover:bg-gray-100'
        onClick={selectMovie}
      >
        <div className='flex items-center'>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            alt='サムネイル'
            style={{ width: '50px', height: '50px' }}
          />
          <p className='ml-4 text-sm sm:text-base'>{`${movie.title}(${releaseYear}年)`}</p>
        </div>
        <div className='flex items-center'>
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
