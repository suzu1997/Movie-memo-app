import Link from 'next/link';
import { memo } from 'react';
import { useSelectMovie } from 'src/hooks/useSelectMovie';

export const MovieItem = memo((props) => {
  const { selectedMovie, setSelectedMovie } = useSelectMovie();

  const { movie } = props;
  const selectMovie = () => {
    setSelectedMovie(movie);
  }

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
          <p className='ml-4'>{`${movie.title}(${releaseYear}年)`}</p>
        </div>
        <div className='flex items-center'>
          <i className='fas fa-caret-right fa-2x'></i>
        </div>
      </div>
    </Link>
  );
});
