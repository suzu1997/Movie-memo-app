import { useCallback, useState } from 'react';
import Router from 'next/router';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { PrimaryButton } from 'src/components/button/PrimaryButton';
import { useSelectMovie } from 'src/hooks/useSelectMovie';
import { createMovieNote } from 'src/lib/movieNotes';
import { MovieNoteForm } from 'src/components/movie-note/MovieNoteForm';

export default function MovieNote() {
  const { selectedMovie } = useSelectMovie();

  const [evaluation, setEvaluation] = useState('');
  const [impression, setImpression] = useState('');

  //SelectWatchDateの値を、その日の日付で初期設定する
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear().toString());
  const [month, setMonth] = useState(('0' + (today.getMonth() + 1)).slice(-2));
  const [day, setDay] = useState(('0' + today.getDate()).slice(-2));

  const data = {
    title: `${selectedMovie.title}`,
    src: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`,
    year: `${year}`,
    month: `${month}`,
    day: `${day}`,
    watchDate: `${year}${month}${day}`,
    evaluation: `${evaluation}`,
    impression: `${impression}`,
  };

  //映画メモを作成
  const onClickSave = useCallback(async () => {
    await createMovieNote(data);
    Router.push('/');
  }, [data]);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <div className='flex justify-end'>
          <button
            className='text-xs sm:text-sm block border border-solid border-black px-5 py-3 mr-4 rounded-lg hover:bg-gray-100 focus:outline-none'
            onClick={() => Router.back()}
          >
            戻る
          </button>
          <PrimaryButton onClick={onClickSave}>保存</PrimaryButton>
        </div>
        <MovieNoteForm
          value={selectedMovie.title}
          year={year}
          month={month}
          day={day}
          evaluation={evaluation}
          impression={impression}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
          setEvaluation={setEvaluation}
          setImpression={setImpression}
        />
      </div>
      <Footer />
    </div>
  );
}
