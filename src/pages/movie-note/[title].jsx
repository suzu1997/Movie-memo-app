import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Footer } from 'src/components/layout/Footer';
import { Header } from 'src/components/layout/Header';
import { DeleteConfirmDialog } from 'src/components/DeleteConfirmDialog';
import {
  deleteMovieNote,
  getMovieNoteData,
  getMovieNotesTitles,
  updateMovieNote,
} from 'src/lib/movieNotes';
import { MovieNoteForm } from 'src/components/movie-note/MovieNoteForm';
import { useMovieNote } from 'src/hooks/useMovieNote';
import { MovieNoteButton } from 'src/components/movie-note/MovieNoteButton';

const MovieNote = ({ initialData }) => {
  const router = useRouter();
  const { movieNote, mutate, error } = useMovieNote(initialData);

  const [year, setYear] = useState(movieNote.year);
  const [month, setMonth] = useState(movieNote.month);
  const [day, setDay] = useState(movieNote.day);
  const [evaluation, setEvaluation] = useState(movieNote.evaluation);
  const [impression, setImpression] = useState(movieNote.impression);

  //DeleteComfirmDialog の開閉に関するstate
  const [dialogOpen, setDialogOpen] = useState(false);

  //DeleteComfirmDialog の開閉に関する関数
  const handleClickDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const data = {
    title: `${movieNote.title}`,
    src: `${movieNote.src}`,
    year: `${year}`,
    month: `${month}`,
    day: `${day}`,
    watchDate: `${year}${month}${day}`,
    evaluation: `${evaluation}`,
    impression: `${impression}`,
  };

  //映画メモのデータを変更
  const onClickUpdate = useCallback(async () => {
    const id = initialData.id;
    await updateMovieNote(data, id);
    mutate(['movieNotes', initialData.title]);
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //映画メモを削除
  const onClickDelete = useCallback(async () => {
    const id = initialData.id;
    await deleteMovieNote(id);
    mutate(['movieNotes', initialData.title]);
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    mutate(['movieNotes', initialData.title]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    console.log(error);
    return <div>failed to load</div>;
  }
  return (
    <div className='min-h-screen p-0 flex flex-col items-center'>
      <Header />
      <div className='flex-grow w-4/5 max-w-lg mx-auto my-10'>
        <MovieNoteButton
          onClickUpdate={onClickUpdate}
          handleClickDialogOpen={handleClickDialogOpen}
        />
        <MovieNoteForm
          value={movieNote.title}
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
      <DeleteConfirmDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        onClickDelete={onClickDelete}
      />
      <Footer />
    </div>
  );
};

//titleのとりうる値のリストを返す
export async function getStaticPaths() {
  const paths = await getMovieNotesTitles();
  return {
    paths,
    fallback: 'blocking',
  };
}
//titleに基づいて必要なデータを取得
export async function getStaticProps({ params }) {
  const initialData = await getMovieNoteData(params.title);
  return {
    props: {
      initialData,
    },
    revalidate: 5,
  };
}

export default MovieNote;
