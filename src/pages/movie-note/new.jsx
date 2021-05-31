import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { useSelectMovie } from 'src/hooks/useSelectMovie';
import { createMovieNote } from 'src/lib/movieNotes';
import { MovieNoteForm } from 'src/components/movie-note/MovieNoteForm';
import { useMovieNote } from 'src/hooks/useMovieNote';
import { MovieNoteButton } from 'src/components/movie-note/MovieNoteButton';

const MovieNote = () => {
  const router = useRouter();

  const { selectedMovie } = useSelectMovie();
  const { mutate } = useMovieNote(selectedMovie);

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
    mutate(['movieNotes', selectedMovie.title]);
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <MovieNoteButton onClickSave={onClickSave} />
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
};

export default MovieNote;
