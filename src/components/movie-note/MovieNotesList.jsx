import { memo, useEffect, useState } from 'react';
import Link from 'next/link';

import { MovieNoteItem } from 'src/components/movie-note/MovieNoteItem';
import { SkeletonLoading } from 'src/components/SkeletonLoading';
import { getMovieNotesData } from 'src/lib/movieNotes';

export const MovieNotesList = memo(() => {
  const [movieNotes, setMovieNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const movieNotes = await getMovieNotesData();
    setMovieNotes(movieNotes);
    setLoading(false);
  }, []);

  return (
    <div className='flex flex-col w-11/12 max-w-screen-sm mx-auto my-8 p-0 min-h-full flex-grow'>
      <div>
        <h2 className='w-44 p-4 mb-0 text-center border border-solid border-black border-b-0 rounded-b-none rounded-t-lg font-normal'>
          Movie Notes
        </h2>
      </div>
      <ul className='border border-solid border-black flex-grow pb-16'>
      {loading ? (
          <div>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </div>
        ) : (
          movieNotes.map((movieNote) => {
            return (
              <li key={movieNote.title}>
                <Link href={`/movie-note/${movieNote.title}`}>
                  <a className='block p-2 border-b border-solid border-black cursor-pointer hover:bg-gray-100'>
                    <MovieNoteItem movieNote={movieNote} />
                  </a>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
});
