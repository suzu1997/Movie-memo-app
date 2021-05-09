import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { useSelectMovie } from 'src/hooks/useSelectMovie';
import { searchMovieNote } from 'src/lib/movieNotes';

export default function MovieWork() {
  const { selectedMovie } = useSelectMovie();
  const [movieNote, setMovieNote] = useState([]);

  const releaseYear = selectedMovie.release_date.slice(0, 4);

  //マウント時のみ
  useEffect(async() => {
    const movieNote = await searchMovieNote(selectedMovie.title);
    setMovieNote(movieNote);
  }, []);

  //選んだ映画のメモを作成済かどうか
  let movieNoteExist;
  if (movieNote.length > 0) {
    movieNoteExist = true;
  } else {
    movieNoteExist = false;
  }

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg pt-10'>
        <div className='flex justify-center'>
          <img
            className='w-52 h-52 block border-2 border-solid border-gray-800'
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`}
          />
          <div className='flex flex-col justify-center ml-3 sm:ml-10'>
            {/* 登録がまだの場合はmovie-note/newへ、登録済みの場合はmovie-note/[title]へ遷移*/}
            {movieNoteExist ? (
              <Link href={`/movie-note/${movieNote[0].title}`} passHref>
                <a>
                  <PrimaryButton>
                    noteを作成済 <br />
                    <i className='far fa-edit'></i>
                  </PrimaryButton>
                </a>
              </Link>
            ) : (
              <Link href='/movie-note/new' passHref>
                <a>
                  <PrimaryButton>
                    noteを作成 <br />
                    <i className='fas fa-plus'></i>
                  </PrimaryButton>
                </a>
              </Link>
            )}
          </div>
        </div>
        <p className='mt-10'>{`タイトル: ${selectedMovie.title}`} </p>
        <br />
        <p>{`制作年: ${releaseYear}年`}</p>
        <br />
        <p>
          あらすじ:
          <br />
          {`${selectedMovie.overview}`}
        </p>
        <button
          className='text-xs sm:text-sm my-6 mx-auto block border border-solid border-black px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none'
          onClick={() => Router.back()}
        >
          戻る
        </button>
      </div>
      <Footer />
    </div>
  );
}
